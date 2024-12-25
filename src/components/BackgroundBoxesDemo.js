// "use client";
// import React from "react";
// import { Boxes } from "./ui/background-boxes"; // Adjust path if necessary
// import { cn } from "@/lib/utils";

// export function BackgroundBoxesDemo() {
//   return (
//     <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
//       <div
//         className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"
//       />
//       <Boxes />
//       <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
//         Tailwind is Awesome
//       </h1>
//       <p className="text-center mt-2 text-neutral-300 relative z-20">
//         Framer motion is the best animation library ngl
//       </p>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from 'react';
import { Boxes } from "./ui/background-boxes"; // Adjust path if necessary
import { cn } from "@/lib/utils";
import Image from "next/image";
 import styles from './WorkFlow.module.css'; // Assuming your CSS file for workflow is named WorkFlow.module.css

export function BackgroundBoxesDemo() {
    const [openDemoForm, setOpenDemoForm] = useState(false);

    return (
        <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            {/* Background Mask */}
            <div
                className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"
            />

            {/* Background Boxes */}
            <Boxes />

            {/* Workflow Content */}
            <div className={styles["workflow-page"]}>
                <div className={styles["workflow-head"]}>
                    <span className={styles["workflow-head-title"]}>Simplify Your Workflow with Cloud PLM & PDM</span>
                    <span className={styles["workflow-head-desc"]}>Manage files, Designs, Parts, BOMs, inventory, and purchases effortlessly in one platform.</span>
                </div>

                <div className={styles["workflow-imgs"]}>
                    <div className={styles["horizontal-work-line"]} style={{ top: '-2px' }}></div>
                    <div className={styles["horizontal-work-line"]} style={{ top: '-22px' }}></div>
                    <div className={styles["horizontal-work-line"]} style={{ top: '203px' }}></div>
                    <div className={styles["horizontal-work-line"]} style={{ top: '181px' }}></div>

                    <div className={styles["workflow-img"]}>
                        <div className={styles["vertical-work-line"]} style={{ left: '0px' }}></div>
                        <div className={styles["vertical-work-line"]} style={{ left: '-20px' }}></div>
                        <Image
                            alt="Encryption in transit"
                            width={181}
                            height={181}
                        />
                    </div>

                    <div className={styles["workflow-img"]}>
                        <div className={styles["vertical-work-line"]} style={{ left: '0px' }}></div>
                        <div className={styles["vertical-work-line"]} style={{ left: '-25px' }}></div>
                        <Image
                            alt="Encryption in transit"
                            width={180}
                            height={180}
                        />
                    </div>

                    <div className={styles["workflow-img"]}>
                        <div className={styles["vertical-work-line"]} style={{ left: '0px' }}></div>
                        <div className={styles["vertical-work-line"]} style={{ left: '-25px' }}></div>
                        <Image
                            alt="Encryption in transit"
                            width={160}
                            height={100}
                        />
                    </div>

                    <div className={styles["workflow-img"]}>
                        <div className={styles["vertical-work-line"]} style={{ left: '0px' }}></div>
                        <div className={styles["vertical-work-line"]} style={{ left: '-25px' }}></div>
                        <Image
                            alt="Encryption in transit"
                            width={128}
                            height={128}
                        />
                    </div>

                    <div className={styles["workflow-img"]}>
                        <div className={styles["vertical-work-line"]} style={{ left: '0px' }}></div>
                        <div className={styles["vertical-work-line"]} style={{ left: '-25px' }}></div>
                        <div className={styles["vertical-work-line"]} style={{ left: '-50px' }}></div>
                        <div className={styles["vertical-work-line"]} style={{ left: '-75px' }}></div>
                        <Image
                            alt="Encryption in transit"
                            width={152}
                            height={180}
                        />
                    </div>
                </div>

                <button onClick={() => setOpenDemoForm(!openDemoForm)}>Request demo</button>
            </div>

            {openDemoForm && <RequestDemo onclose={() => setOpenDemoForm(!openDemoForm)} />}
        </div>
    );
}
