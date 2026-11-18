import type { Project } from "@/content/types";

// Claims here should match what's supported by the project reports and the
// current resume. In particular: the meter range is a design target, the FPGA
// processor cores are third-party, and the FPGA board hasn't been used in a class.

const meter = "/images/projects/capacitance-meter";
const fpga = "/images/projects/fpga-processor-system";
const workshop = "/images/projects/kicad-workshop";

export const projects: Project[] = [
  {
    slug: "capacitance-meter",
    title: "Auto-Ranging Capacitance Meter",
    period: "April – June 2026",
    context: "Course design project, B EE 425 (Microprocessor System Design)",
    summary:
      "A standalone meter on a custom mixed-signal PCB that measures capacitors by switching between a 555 timer and a constant-current source. ESP32-S3 firmware in C++ picks the range, times the measurement, and drives an OLED display.",
    tags: ["ESP32-S3", "C++", "PlatformIO", "KiCad", "Mixed-signal PCB"],
    cover: {
      src: `${meter}/meter-front.jpg`,
      alt: "The finished meter in its enclosure, reading 10.040 µF on the OLED with a capacitor clipped to the test leads",
      caption:
        "The finished meter measuring a 10 µF capacitor on the 4.99 kΩ constant-current range.",
    },
    sections: [
      {
        heading: "Overview",
        body: [
          "The goal was a capacitance meter that works on its own, without a PC attached, and picks its measurement range automatically. The design target was 20 pF to 200 µF.",
          "I designed the circuit and PCB in KiCad, assembled the board and enclosure, and wrote the firmware. The board uses an Arduino Nano ESP32 (ESP32-S3) as the controller, a 0.96\" I2C OLED for the readout, and relays to switch between measurement circuits.",
        ],
      },
      {
        heading: "How it measures",
        body: [
          "No single method covers six decades of capacitance well, so the meter has two measurement paths and switches between them.",
        ],
        bullets: [
          "Small capacitors: a TLC555 runs in astable mode with the unknown capacitor as its timing capacitor. The ESP32-S3's hardware pulse counter counts the 555's output over a fixed 10 ms window, and the firmware converts frequency to capacitance with C = 1.44 / ((R1 + 2R2) · f).",
          "Larger capacitors: a constant-current source built from an LT1001 precision op amp, an LT1009 2.5 V reference, and a PNP transistor charges the capacitor through one of three relay-selected 0.1% resistors. The firmware uses the ADC to time how long the capacitor takes to charge from 0.5 V to 2.0 V, then computes C = I · Δt / ΔV.",
          "Auto-ranging: every measurement starts with the 555. If the result is too large or times out, the firmware switches to the constant-current source, starting with the smallest current for the best resolution, and steps to higher currents if charging is too slow. If even the smallest current charges too fast to time accurately, it falls back to the 555 reading.",
        ],
        figures: [
          {
            src: `${meter}/schematic.webp`,
            alt: "KiCad schematic of the capacitance meter showing the power input, constant-current source, 555 timer, relay driver, capacitor input and discharge, and Arduino Nano ESP32 with OLED",
            caption:
              "Schematic: ±12 V input, constant-current source, 555 timer, relay driver, capacitor input/discharge, and the ESP32 module with OLED.",
          },
        ],
      },
      {
        heading: "Hardware",
        body: [
          "The board runs from a ±12 V split supply. The Nano ESP32 takes the +12 V rail and its onboard regulator supplies 3.3 V for the 555 and the OLED. Five 12 V relays, driven through a ULN2803 Darlington array, select the measurement mode, the current range, and a discharge path that empties the capacitor before each constant-current measurement.",
          "I put test points on the supply rails and the main signal nodes. They paid off during bring-up, making it quick to track down problems like cold solder joints. The enclosure has a window for the OLED and banana jacks for the test leads.",
        ],
        figures: [
          {
            src: `${meter}/pcb-layout.webp`,
            alt: "KiCad PCB layout of the meter with the ESP32 module, OLED header, relays, op amp, 555 timer, and labeled test points",
            caption: "PCB layout in KiCad.",
          },
          {
            src: `${meter}/enclosure-cad.webp`,
            alt: "CAD model of the meter enclosure with an OLED window, red and black banana jacks on top, and two barrel jacks on the side",
            caption: "Enclosure model, with the OLED window, banana jacks for the leads, and the two supply jacks.",
          },
        ],
      },
      {
        heading: "Firmware",
        body: [
          "The firmware is C++ built with PlatformIO on the Arduino framework. It's split into a measurement driver (relay control, pulse counter, ADC timing, and auto-ranging) and a display module, so the main loop only measures, displays, and logs to serial.",
          "Each measurement returns a result with the mode, range, raw timing, and a status such as OK, timeout, too short, or too long. The display and serial log show that status, which made it much easier to see why a reading failed instead of only seeing a wrong number.",
          "On startup the firmware runs an open-lead calibration: with the leads open, it averages several 555 readings and subtracts that offset from later low-capacitance readings.",
        ],
      },
      {
        heading: "Testing and results",
        body: [
          "I compared the meter against a lab LCR meter, using capacitors from tens of picofarads up to about 150 µF, both before and after putting it in its final enclosure. Readings were repeatable but tended to read high, especially at low capacitance, where the leads, banana jacks, and case wiring add a few picofarads of stray capacitance.",
          "The open-lead calibration reduced the mean error in the recorded low-pF readings from about 38% to 6.6%. The constant-current ranges still read several percent high; calibrating a scale factor for each range against the LCR meter is the next step.",
        ],
      },
      {
        heading: "What I'd do differently",
        body: [],
        bullets: [
          "The measurement routine is blocking: the display can't update while a long measurement is running. I'd rewrite it as a non-blocking state machine (discharge, select range, wait for threshold, and so on), which would also make relay timing easier to debug.",
          "Testing the power input before populating the board paid off. The -12 V supply's plug was listed as center-positive but wasn't, and I caught it before any parts were on the board.",
          "Late in final calibration, the Nano ESP32 developed an internal short from 3.3 V to ground at its flash chip, likely from electrostatic discharge. The board's rails measured correctly with the module removed. The LCR comparison above was recorded before that failure. Next time I'd keep spares of critical modules and be more careful about ESD.",
        ],
      },
    ],
  },
  {
    slug: "fpga-processor-system",
    title: "Z80 / 68008 FPGA Processor System",
    period: "June – August 2026",
    context: "Independent study (B EE 498), supervised by Dr. Arnold Berger",
    summary:
      "An FPGA platform that runs either a Z80-compatible or a 68000-compatible soft core against real EPROM and SRAM on a custom four-layer memory board, with the bus exposed to a logic analyzer.",
    tags: ["SystemVerilog", "Quartus Prime", "DE10-Lite (MAX 10)", "KiCad", "Logic analyzer"],
    cover: {
      src: `${fpga}/memory-board.jpg`,
      alt: "Assembled memory board with socketed SRAM and EPROM chips, a bus transceiver, debug LEDs, and a 40-pin logic analyzer header",
      caption:
        "The assembled memory board: socketed SRAM and EPROM, the SN74LVC245 transceiver, debug LEDs, and the LogicPort header on the left.",
    },
    links: [{ label: "Source on GitHub", href: "https://github.com/sohail-c/summerFPGA" }],
    sections: [
      {
        heading: "Overview",
        body: [
          "The B EE 425 labs at UW Bothell use Z80 and 68000-family processor kits. The goal of this independent study was to prototype an FPGA-based platform that could replace them: a soft processor on a DE10-Lite board, external memory chips that can be programmed and probed, and a direct connection for the LogicPort logic analyzer used in the labs. The result is a working prototype; it hasn't been used in a class.",
          "The processor cores are existing open-source projects: TV80 (Z80-compatible, MIT license) and fx68k (68000-compatible, GPL v3). My work was everything around them: the SystemVerilog bus adapters and memory interface, the memory board, and the verification. The two configurations are separate FPGA builds, and only one runs at a time.",
        ],
        figures: [
          {
            src: `${fpga}/block-diagram.webp`,
            alt: "Block diagram: inside the DE10-Lite FPGA, either the fx68k core with a 16-to-8-bit bridge or the TV80 core with a Z80 bus adapter connects to a shared external memory interface; that drives the external memory PCB with a 74LVC245 transceiver, ROM, and SRAM, which a logic analyzer observes passively",
            caption:
              "System architecture. Both builds converge on the same byte-wide memory interface and board.",
          },
        ],
      },
      {
        heading: "Bridging a 16-bit core to an 8-bit bus",
        body: [
          "The 68008 has an 8-bit data bus, but fx68k implements the 68000's 16-bit bus with separate upper and lower byte strobes. I wrote a bridge, a small state machine, that turns each fx68k bus cycle into one or two byte-wide transactions:",
        ],
        bullets: [
          "Upper strobe only: one transfer at the even address. Lower strobe only: one transfer at the odd address.",
          "Both strobes (a word access): two transfers, the upper byte at the even address and then the lower byte at the next address. Read bytes are placed in the matching half of the core's data bus.",
          "DTACK is asserted back to the core only after every byte transfer has finished, so the core waits for slow memory on its own.",
          "A memory controller in the top-level module performs each byte transfer with conservative fixed waits: 200 ns for EPROM reads and 100 ns for SRAM, then signals the bridge that data is ready.",
        ],
      },
      {
        heading: "Z80 side and shared memory interface",
        body: [
          "TV80 already has an 8-bit data bus, so its adapter mainly decodes addresses: when MREQ is asserted, address bit 15 selects the EPROM ($0000–$7FFF) or the SRAM ($8000–$FFFF).",
          "Both builds feed a common memory interface module that drives the board's chip selects, read and write strobes, and the direction of the SN74LVC245 transceiver, which translates between the FPGA's 3.3 V I/O and the 5 V memory chips. Keeping processor-specific timing out of this module meant the board-level logic only had to be written and tested once.",
        ],
      },
      {
        heading: "Memory board",
        body: [
          "I designed a four-layer board in KiCad: signals on the outer layers, with a ground plane and a power plane split into 3.3 V and 5 V regions on the inner layers. It has sockets for the same EPROM and SRAM chips the existing labs use, the voltage-translating transceiver, test points and debug LEDs, and a 40-pin header that lets the LogicPort observe the bus passively without being in the signal path.",
          "The board is the same width as the DE10-Lite (97.54 mm) and short enough to leave its switches and displays reachable when stacked on top. At assembly, the only 40-pin connector on hand was a right-angle part, so the prototype mounts at 90° to the FPGA board instead.",
        ],
        figures: [
          {
            src: `${fpga}/board-render.webp`,
            alt: "3D render of the memory board showing the SRAM and ROM sockets, transceiver, LEDs, and 40-pin logic analyzer connector",
            caption: "3D render of the memory board from KiCad.",
          },
          {
            src: `${fpga}/bench-setup.jpg`,
            alt: "Lab bench with a laptop, the DE10-Lite and memory board connected to a LogicPort analyzer, and a monitor showing captured waveforms",
            caption: "Test setup: DE10-Lite with the memory board, the LogicPort analyzer, and its capture software.",
          },
        ],
      },
      {
        heading: "Verification",
        body: [
          "Each RTL module has a SystemVerilog testbench. The memory interface was tested for reset, idle, ROM reads, SRAM reads and writes, and an attempted ROM write; the Z80 adapter for ROM and SRAM access; and the bridge for upper-byte, lower-byte, and word reads and writes.",
          "On hardware, I captured the bus with the LogicPort at 500 MHz. The fx68k build comes out of reset, reads its initial stack pointer ($0000FFFF) and program counter ($00001000) from the EPROM, and continues executing from $1000. The Z80 build ran a memory-test ROM that wrote $AA to $818C and read it back, and the captures confirmed its 5 MHz clock.",
        ],
        figures: [
          {
            src: `${fpga}/capture-reset-fetch.webp`,
            alt: "Logic analyzer capture of the fx68k build reading addresses 0 through 7 from ROM and then fetching from address 1000 hex",
            caption:
              "fx68k leaving reset: reads of addresses $0–$7 (stack pointer and program counter vectors), then fetches from $1000.",
          },
          {
            src: `${fpga}/capture-sram-write.webp`,
            alt: "Logic analyzer capture of byte writes to SRAM starting at address 8000 hex, with chip select and write strobes asserted",
            caption: "Byte writes to SRAM starting at $8000.",
          },
        ],
      },
      {
        heading: "Limitations and next steps",
        body: [
          "I prioritized reliable memory access over cycle-accurate timing. The Z80 build runs at 5 MHz rather than a Z80A's 4 MHz and doesn't insert wait states. The fx68k build runs at 25 MHz with conservative fixed delays rather than at 68008-like speeds, and its address strobe comes from the memory controller rather than the original bus sequence. Next steps would be tightening the delays to the actual memory timings, a more cycle-accurate bus, interrupt support, and more test programs.",
          "A side quest: getting Quartus and the USB-Blaster working on an Apple Silicon Mac took a Debian VM in UTM with a patched Rosetta binary. I wrote up the steps and fixes in the report for the next student who tries it.",
        ],
      },
    ],
  },
  {
    slug: "kicad-workshop",
    title: "KiCad PCB Design Workshop",
    period: "October 2026",
    context: "IEEE student branch, UW Bothell",
    summary:
      "A hands-on evening workshop I prepared and led for 45+ attendees, taking a small 555-timer LED blinker from schematic to manufacturing files in KiCad.",
    tags: ["KiCad", "PCB design", "Teaching"],
    cover: {
      src: `${workshop}/blinker-render.jpg`,
      alt: "3D render of the workshop reference board, a TLC555 LED blinker with two LEDs, labeled IEEE BLINKER",
      caption: "The routed reference board everyone worked toward.",
    },
    sections: [
      {
        heading: "What we covered",
        body: [
          "The board was small enough to finish in one evening: a TLC555 in astable mode driving two LEDs that alternate. Attendees went through the full workflow:",
        ],
        bullets: [
          "Schematic capture: placing symbols, setting values, wires and net labels, and running the electrical rules check",
          "Assigning footprints",
          "Board outline and component placement",
          "Routing, adding a ground zone, and the design rules check",
          "Exporting Gerber and drill files for manufacturing",
        ],
      },
      {
        heading: "How I set it up",
        body: [
          "The main risk in a hands-on session like this is people falling behind and getting stuck, so I prepared numbered checkpoint projects (starter, schematic complete, placement complete, and a routed reference) so anyone could catch back up at each stage, plus a participant handout listing the exact symbols and footprints.",
          "I ran it from a timed run sheet with recovery points. For each step, I'd demonstrate two or three actions, give everyone a minute or so to try, and check a few screens before moving on.",
        ],
      },
    ],
  },
  {
    slug: "http-server",
    title: "HTTP Retriever and Server",
    period: "February 2026",
    summary:
      "An HTTP client and a multithreaded HTTP server in C++ using POSIX TCP sockets and pthreads on Linux. Supports GET requests, DNS resolution, and file retrieval, with request parsing, status codes, directory traversal protection, custom error pages, and a Bash test harness.",
    tags: ["C++", "POSIX sockets", "pthreads", "Linux"],
  },
  {
    slug: "this-site",
    title: "This Website",
    period: "2025 – present",
    summary:
      "Built with Next.js and TypeScript and exported as static HTML. Projects and photo collections live in typed content files, and a small script generates photo thumbnails and records image sizes.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [{ label: "Source on GitHub", href: "https://github.com/sohail-c/photo-portfolio" }],
  },
];

export const projectsBySlug: Record<string, Project> = Object.fromEntries(
  projects.map((p) => [p.slug, p])
);

export const projectsWithPages = projects.filter((p) => p.sections?.length);
export const otherProjects = projects.filter((p) => !p.sections?.length);
