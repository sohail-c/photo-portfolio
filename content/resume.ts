import type { Resume } from "@/content/types";

// Mirrors the current one-page US resume (finalized 2026-11-14). Keep the two in
// sync when either changes. Phone number intentionally left off the public site.
export const resume: Resume = {
  education: {
    degree: "B.S. in Computer Engineering (GPA 3.80/4.00)",
    school: "University of Washington Bothell",
    dates: "Expected June 2027",
    notes: ["Annual Dean's List (2025–26)"],
    coursework: [
      "Embedded Systems",
      "Microprocessor Systems",
      "Digital Circuits",
      "Operating Systems",
      "Network Design and Programming",
      "Data Structures",
    ],
  },
  skills: [
    { label: "Programming", items: "C++, C, SystemVerilog, Verilog, Java, Python, Bash" },
    {
      label: "Embedded",
      items:
        "AVR (ATmega2560/328P) register-level C, ESP32-S3, PlatformIO, hardware timers, interrupts (timer/pin-change), PWM, UART, SPI, I2C, ADC",
    },
    {
      label: "Systems and tools",
      items:
        "Linux, pthreads, KiCad, Quartus Prime, LTspice, Git, oscilloscopes, logic analyzers",
    },
  ],
  projects: [
    {
      title: "Auto-Ranging Capacitance Meter",
      org: "ESP32-S3, KiCad, C++",
      dates: "April – June 2026",
      href: "/projects/capacitance-meter",
      bullets: [
        "Designed and assembled a custom mixed-signal PCB and enclosure for an auto-ranging capacitance meter targeting 20 pF–200 µF.",
        "Developed ESP32-S3 C++ firmware using pulse counting, ADC timing, I2C OLED output, and relay control to select a TLC555 path or three constant-current ranges.",
        "Benchmarked against a lab LCR meter; open-lead calibration reduced mean error in recorded low-pF readings from approximately 38% to 6.6%.",
      ],
    },
    {
      title: "Z80/68008 FPGA Processor System",
      org: "SystemVerilog, Quartus, KiCad",
      dates: "June – August 2026",
      href: "/projects/fpga-processor-system",
      bullets: [
        "Prototyped an FPGA-based platform to replace B EE 425 lab kits in a faculty-supervised independent study, using TV80/fx68k configurations and a custom four-layer PCB with EPROM, SRAM, and voltage translation.",
        "Designed the SystemVerilog 16-to-8-bit bus bridge and validated ROM execution/SRAM access with testbenches and logic-analyzer captures.",
      ],
    },
  ],
  work: [
    {
      title: "Grader, Digital Circuits and Systems / Microprocessor System Design",
      org: "University of Washington Bothell",
      dates: "September 2026 – present",
      bullets: [
        "Grade weekly quizzes for ~48 students (B EE 271); co-grade exams for B EE 271 and B EE 425 (~120 students).",
      ],
    },
    {
      title: "STEM Tutor, Quantitative Skills Center",
      org: "University of Washington Bothell",
      dates: "January 2026 – present",
      bullets: [
        "Conduct 6+ weekly peer tutoring sessions in programming, circuit analysis, engineering, and calculus.",
      ],
    },
    {
      title: "Grader, Programming for Engineers / Computer Programming",
      org: "University of Washington Bothell",
      dates: "October 2025 – June 2026",
      bullets: [
        "Reviewed and debugged 20+ weekly C++ and Java homework submissions for CSS 132, 133, and 143; summarized recurring errors for instructor feedback.",
      ],
    },
  ],
  leadership: [
    {
      title: "IEEE Student Branch, University of Washington Bothell",
      org: "President, March 2026 – present; Treasurer, May 2025 – February 2026",
      dates: "May 2025 – present",
      bullets: [
        "Prepared and led a KiCad PCB design workshop for 45+ attendees, teaching schematic capture, PCB layout, and Gerber/drill export.",
        "Coordinated logistics and budgeting for 8+ technical, professional, and social events with 150+ cumulative attendees.",
        "Recruited and trained new officers, doubling the officer team year over year.",
      ],
    },
  ],
};
