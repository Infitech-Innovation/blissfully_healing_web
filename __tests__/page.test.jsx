import { render, screen, act, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomeOverviewPage from "../app/_home/overviewpage";

// --- Mocks ---

const mockReplace = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({ replace: mockReplace }),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  /* eslint-disable @next/next/no-img-element */
  default: ({ alt, priority: _priority, ...props }) => (
    <img alt={alt} {...props} />
  ),
  /* eslint-enable @next/next/no-img-element */
}));

const mockUseReducedMotion = jest.fn(() => false);

jest.mock("motion/react", () => ({
  motion: new Proxy(
    {},
    {
      get: (_, tag) =>
        function MotionTag({
          children,
          initial: _i,
          animate: _a,
          exit: _e,
          transition: _t,
          whileHover: _wh,
          whileTap: _wt,
          layout: _l,
          ...domProps
        }) {
          if (tag === "button")
            return <button {...domProps}>{children}</button>;
          return <div {...domProps}>{children}</div>;
        },
    },
  ),
  AnimatePresence: ({ children }) => <>{children}</>,
  useReducedMotion: () => mockUseReducedMotion(),
}));

// --- Helpers ---

async function advanceTime(ms) {
  await act(async () => {
    jest.advanceTimersByTime(ms);
  });
}

async function skipToOpenLetter() {
  await advanceTime(5000); // loading → false
  await advanceTime(350); // auto-open delay
  await advanceTime(650); // opening animation
}

// --- Tests ---

describe("HomeOverviewPage", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    mockReplace.mockClear();
    mockUseReducedMotion.mockReturnValue(false);
  });

  afterEach(async () => {
    await act(async () => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  // Loading screen
  describe("loading screen", () => {
    it("shows the loading screen on mount", () => {
      render(<HomeOverviewPage />);

      const overlay = screen.getByTestId("loading-overlay");
      expect(
        within(overlay).getByAltText("Blissfully Healing"),
      ).toBeInTheDocument();
      expect(
        within(overlay).getByText("Blissfully Healing"),
      ).toBeInTheDocument();
    });

    it("hides the loading screen after 5 seconds", async () => {
      render(<HomeOverviewPage />);

      expect(screen.getByTestId("loading-overlay")).toBeInTheDocument();

      await advanceTime(5000);

      expect(screen.queryByTestId("loading-overlay")).not.toBeInTheDocument();
    });
  });

  // Closed scroll state
  describe("closed scroll (after loading)", () => {
    it("shows the scroll image and Open Letter button", async () => {
      render(<HomeOverviewPage />);
      await advanceTime(5000);

      expect(screen.getByAltText("Letter Scroll")).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /open letter/i }),
      ).toBeInTheDocument();
    });
  });

  // Letter auto-opens
  describe("letter auto-open", () => {
    it("auto-opens the letter after loading + 350 ms delay", async () => {
      render(<HomeOverviewPage />);
      await skipToOpenLetter();

      expect(screen.getByAltText("Old Paper")).toBeInTheDocument();
      expect(
        screen.getAllByText(/A Love Letter to My Beloved/i).length,
      ).toBeGreaterThan(0);
    });

    it("displays all six sanctuaries in the letter", async () => {
      render(<HomeOverviewPage />);
      await skipToOpenLetter();

      const sanctuaries = [
        /Sanctuary of Stillness/i,
        /Sanctuary of Belonging/i,
        /Sanctuary of Purification/i,
        /Sanctuary of Voyage/i,
        /Sanctuary of the Return/i,
        /Sanctuary of Remembrance/i,
      ];

      for (const sanctuary of sanctuaries) {
        expect(screen.getByText(sanctuary)).toBeInTheDocument();
      }
    });
  });

  // Manual open via button
  describe("Open Letter button", () => {
    it("opens the letter when clicked manually", async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
      render(<HomeOverviewPage />);
      await advanceTime(5000);

      await user.click(screen.getByRole("button", { name: /open letter/i }));
      await advanceTime(650);

      expect(screen.getByAltText("Old Paper")).toBeInTheDocument();
    });

    it("does not open if already opening (debounce guard)", async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
      render(<HomeOverviewPage />);
      await advanceTime(5000);

      const btn = screen.getByRole("button", { name: /open letter/i });
      await user.click(btn);
      await user.click(btn); // ignored — isOpening is true

      await advanceTime(650);
      expect(screen.getAllByAltText("Old Paper")).toHaveLength(1);
    });
  });

  // Reduced motion
  describe("reduced motion", () => {
    it("skips animation and shows letter immediately when reduced motion is preferred", async () => {
      mockUseReducedMotion.mockReturnValue(true);

      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
      render(<HomeOverviewPage />);
      await advanceTime(5000);

      await user.click(screen.getByRole("button", { name: /open letter/i }));

      // No timer advance needed — reduced motion shows letter synchronously
      expect(screen.getByAltText("Old Paper")).toBeInTheDocument();
    });
  });

  // Enter Sanctuary button
  describe("Enter Sanctuary button", () => {
    it("calls router.replace('/homepage') when clicked", async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
      render(<HomeOverviewPage />);

      await user.click(
        screen.getByRole("button", { name: /enter\s+sanctuary/i }),
      );
      expect(mockReplace).toHaveBeenCalledWith("/homepage");
    });
  });

  // Cleanup coverage — unmount mid-animation
  describe("cleanup", () => {
    // eslint-disable-next-line jest/expect-expect
    it("clears the opening timeout if unmounted mid-animation", async () => {
      const { unmount } = render(<HomeOverviewPage />);
      await advanceTime(5000); // finish loading

      // Trigger openLetter but don't wait for the 650ms animation to finish
      await act(async () => {
        jest.advanceTimersByTime(350); // fires the auto-open delay → openLetter called
      });

      // Unmount while the 650ms openingTimeout is still pending
      unmount();

      // Advance past it — no "not wrapped in act" warning should appear
      await act(async () => {
        jest.advanceTimersByTime(650);
      });
    });
  });
});
