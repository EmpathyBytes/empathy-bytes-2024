// This page contains all the information about the emerging tech team... 3D model implementation is also done at the end of this page. - Jacob

import React from "react";
import Layout from "../components/layout";
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

import BuzzPlaque from "../components/canvas/buzzplaque";
import Converse from "../components/canvas/rightconverse";

import Grid from '@mui/material/Grid';


import "../styles/experiencesIndividual.css"
import "../styles/all.css"


function EmergingTech() {
    return(
        <Layout>
            <div className="full-container-experiences">
                <Grid container spacing={2} className="">
                    <div className="grid-margins-experiences">
                            <h1 className="header-experiences">The Emerging Technologies Team</h1>
                    </div>
                </Grid>

                <Grid container spacing={0}>
                    <div className="grid-margins-experiences">
                        <Grid item xs={12} sm={8}>
                            <h1 className="sub-header-experiences">What We Do</h1>
                        </Grid>
                        <Grid item sm={4}></Grid>
                        <Grid sm={5}></Grid>
                        <Grid xs={12} sm={7}>
                            <p className="paragraph-experiences paragraph-indent-experiences-left">
                            Our team develops Virtual and Augmented Reality experiences with the goal of fostering empathy and understanding. 
                            Through the use of 3D technologies, we aim to preserve communities and their artifacts, giving others the chance 
                            to see and learn more about them.
                            </p>
                        </Grid>
                    </div>
                </Grid>

                <Grid container spacing={0} className="grid-margins-experiences">
                    <Grid item sm={5}></Grid>
                    <Grid item xs={12} sm={7} className="right-align-experiences">
                        <h1 className="sub-header-experiences">The VR Archives</h1>
                    </Grid>
                    <Grid item sm={5}></Grid>
                    <Grid xs={12} sm={7}>
                        <p className="paragraph-experiences paragraph-indent-experiences-left">Empathy Bytes is developing a 
                        Virtual Reality Museum where anyone can experience and learn about artifacts in the Georgia Tech Archives.
                        Our team is able digitally preserve items such as an official 1996 Atlanta Olympics Torch, Buzz’s Converses 
                        from 1988, and a 1937 rat cap through the use of photogrammetry and hand-modeling techniques. We hope this VR experience 
                        allows the Georgia Tech Community to strengthen its connection to the school’s past and safely preserve these memories.
                        </p>
                        <p className="paragraph-experiences paragraph-indent-experiences-left">Please click and drag the 3D models below to see
                            in 360 degree view.
                        </p>
                    </Grid>
                </Grid>

                <Grid container spacing={0} alignItems="flex-end">
                    {/* Loading 3D Models */}
                    <Grid sm={6} xs={12} item>
                        <h1><center>Buzz's Plaque</center></h1>
                        {/* I would recommend following this structure for importing future models - Jacob */}
                        <div className="vr-container-1 b-1">
                            <Canvas>
                                <Suspense>
                                    <BuzzPlaque scale={3.5} />
    
                                    {/*PLEASE READ (6/10/2023)
                                        There is a compatibility issue with this Environment component and the new version of three.js, I think it should be resolved soon though.
                                        For now, I have inlcuded an ambientLight component instead. When this issue is resolved, feel free to add the Environment component back in.
                                    - Jacob Amin */}
    
                                    {/* <Environment /> */}
                                    <ambientLight />
                                    <OrbitControls />
                                </Suspense>
                            </Canvas>
                        </div>
                    </Grid>

                    <Grid item sm={6} xs={12}>
                        <h1><center>Buzz's Right Converse</center></h1>
                        <div className="vr-container-2 b-2">
                            <Canvas>
                                <Suspense>
                                    <Converse scale={6} />

                                    {/*PLEASE READ (6/10/2023)
                                        There is a compatibility issue with this Environment component and the new version of three.js, I think it should be resolved soon though.
                                        For now, I have inlcuded an ambientLight component instead. When this issue is resolved, feel free to add the Environment component back in.
                                    - Jacob Amin */}

                                    {/* <Environment /> */}
                                    <ambientLight />
                                    <OrbitControls />
                                </Suspense>
                            </Canvas>
                        </div> 
                    </Grid>
                </Grid>

                <Grid container spacing={2} className="" style={{padding: "2% 0 2% 0"}} alignItems={'center'}>
                    <Grid sm={6} xs={12} item className="right-align-experiences">
                        <h1 className="sub-header-experiences">Spring 2023 Progress</h1>
                    </Grid>
    
                    <Grid item sm={6} xs={12}>
                        <iframe src="https://www.youtube.com/embed/yJHL_D9JobI" 
                            title="YouTube video player" frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    );   
}

export default EmergingTech;