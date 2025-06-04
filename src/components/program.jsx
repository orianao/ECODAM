import React from "react";
import styled from "styled-components";
import allProgram from "../data/ECODAM2025_Programme.pdf";
import day2Program from "../data/ECODAM2025_BioinformaticsWorkshop.pdf";

const SectionContainer = styled.div`
    padding: 100px 20px;
    background-color: white;
`

const ProgramContainer = styled.div`
    text-align: left;
    max-width: 800px;
    margin: auto;
`;

const ProgramAnchor = styled.div`
    padding: 1px !important;
    background: none !important;
`;

const Title = styled.h2`
    width: 100%;
    font-family: 'Raleway', sans-serif;
    font-size: 36px;
    font-weight: 800;
    color: rgb(51, 51, 51);
    text-align: center;
    position: relative;
    display: inline-block;

    &::after {
        position: absolute;
        content: "";
        background: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
        height: 4px;
        width: 60px;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const Hr = styled.hr`
    border: 0;
    height: 2px;
    background: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
    margin: 20px 0;
    left: 50%;
    transform: translateX(-50%);
`;

const Subtitle = styled.h3`
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    color: #555;
    text-align: center;
    margin-bottom: 20px;
`;

const DayHeader = styled.h2`
    font-size: 1.2em;
    margin-top: 1em;
    margin-bottom: 0.5em;
    color: #333;
    font-weight: bold;
`;

const SessionList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0 0 0 1em;
    font-size: 1em;
`;

const SessionItem = styled.li`
    margin-bottom: 0.5em;
    line-height: 1.5;
    text-align: justify;
`;

const StrongText = styled.strong`
    color: #d0021b;
`;

export const Program = (props) => {
  return (
    <SectionContainer>
      <ProgramContainer>
        <ProgramAnchor id="program"></ProgramAnchor>
        <Title>ECODAM 2025 Programme</Title>
        <Subtitle>
          <a href={allProgram}
             target="_blank"
             rel="noopener noreferrer"
          > (DOWNLOAD DETAILED PROGRAM & ABSTRACTS)</a></Subtitle>

        <DayHeader>Monday, June 16</DayHeader>
        <Subtitle>Ferdinand Hall, Building A</Subtitle>
        <SessionList>
        <Subtitle>Session 1</Subtitle>
        <SessionItem><StrongText>15:00 – 15:30</StrongText> Registration</SessionItem>
        <SessionItem><StrongText>15:30 – 16:30</StrongText> Daniela Zaharie (West University of Timișoara): Evolution and Learning for Dispatching Rules Discovery</SessionItem>
        <SessionItem><StrongText>16:30 – 17:30</StrongText> Panel discussion - The Human Factor: Ethics, Opportunities, and Challenges of LLMs in PhD Studies</SessionItem>
        {/* <SessionItem><StrongText>18:30 – 22:00</StrongText> Welcome Dinner</SessionItem> */}
        </SessionList>
        <Hr />

        <DayHeader>Tuesday, June 17</DayHeader>
        <Subtitle>Senate Hall, Building A</Subtitle>
        <SessionList>
        <Subtitle>Session 2</Subtitle>
          <SessionItem><StrongText>9:00 – 9:30</StrongText> Registration</SessionItem>
          <SessionItem><StrongText>9:30 – 10:15</StrongText> Opening Session: 20 years with ECODAM</SessionItem>
          {/* <SessionItem><StrongText>10:15 – 10:30</StrongText> Coffee break</SessionItem> */}
          <Subtitle>Session 3</Subtitle>
          <SessionItem><StrongText>10:30 – 11:30</StrongText> Kenneth DeJong (George Mason University): Understanding Co-Evolutionary Algorithms</SessionItem>
          <SessionItem><StrongText>11:30 – 12:30</StrongText> Darrell Whitley (Colorado State University): Genetic Algorithms,
          Graybox Optimization and the Power of Recombination</SessionItem>
          {/* <SessionItem><StrongText>13:00 – 14:00</StrongText> Lunch (Maiorescu campus restaurant)</SessionItem> */}
          <Subtitle>Session 4</Subtitle>
          <SessionItem><StrongText>15:00 – 16:00</StrongText> Gabriela Ochoa (University of Stirling, UK): Illuminating Optimisation Trajectories</SessionItem>
          <SessionItem><StrongText>16:00 – 17:00</StrongText> Bogdan Paşaniuc (University of Pennsylvania): Polygenic Risk Scores
          for Genomic Medicine: Promises and Challenges </SessionItem>
          {/* <SessionItem><StrongText>17:00 – 17:15</StrongText> Coffee break</SessionItem> */}
          <SessionItem><StrongText>17:15 – 18:30</StrongText> PhD students: 3-minute thesis presentations</SessionItem>
        </SessionList>
        <Hr />



        <DayHeader>Wednesday, June 18</DayHeader>
        <Subtitle>Senate Hall, Building A</Subtitle>
        <SessionList>
        <Subtitle>Session 5. Dedicated to the Solomon Marcus centenary</Subtitle>
          <SessionItem><StrongText>9:30 – 10:30</StrongText> Liviu Dinu (University of Bucharest): On the hidden variables of the
          natural languages similarity</SessionItem>
          <SessionItem><StrongText>10:30 – 11:30</StrongText> Dan Simovici (University of Massachussets, Boston): The Curse and
          Blessings of Dealing with High-Dimensional Data in Machine Learning</SessionItem>
          {/* <SessionItem><StrongText>11:30 – 11:45</StrongText> Coffee break</SessionItem> */}
          <SessionItem><StrongText>11:45 – 12:45</StrongText> Sorin Istrail (Brown University): The Unreasonable Effectiveness of Mathematics in Genome-Wide Association Studies and the Search for Genomic Determinants of Disease</SessionItem>
          {/* <SessionItem><StrongText>13:00 – 14:00</StrongText> Lunch (Maiorescu campus restaurant)</SessionItem> */}

        <Subtitle>Session 6</Subtitle>
          <SessionItem><StrongText>15:00 – 16:00</StrongText> Luca Peruzzotti Jametti (University of Cambridge): Targeting Microglial Metabolic Dysfunction to Halt Chronic Central Nervous System Inflammation</SessionItem>
          <SessionItem><StrongText>16:30 – 17:30</StrongText> George Vassiliou (University of Cambridge): Clonal haematopoiesis
          and leukaemia prevention</SessionItem>
          <SessionItem><StrongText>17:30 – 19:00</StrongText> Guided tour of Iasi City</SessionItem>
        </SessionList>
        <Hr />

        <DayHeader>Thursday, June 19 – Satelite Workshop: Applied Machine Learning/Bioinformatics
          <a href={day2Program}
             target="_blank"
             rel="noopener noreferrer"
             style={{ textAlign: "center", display: "block", margin: "0 auto" }}
          > (DOWNLOAD DETAILED PROGRAM & ABSTRACTS)</a>
        </DayHeader>
        <Subtitle>Ferdinand Hall, Building A</Subtitle>
        <SessionList>
          <Subtitle>Session 7</Subtitle>
          <SessionItem><StrongText>09:30 – 10:00</StrongText> Andi Munteanu (PhD student jointly supervised with Prof H. Luchian and Prof L. Ciortuz, UAIC and Research Assistant in the Core Bioinformatics group): StarLng 2.0: Stability and robustness assessment of single-cell clustering</SessionItem>
          <SessionItem><StrongText>10:00 – 10:30</StrongText> Rafael Kollyfas (Research Assistant in the Core Bioinformatics group): Flufftail 2.0: Unveiling Gene Regulatory Network Dynamics through Fuzzy Clustering of Single-Cell RNAseq Data</SessionItem>
          <SessionItem><StrongText>10:30 – 11:00 </StrongText> Miguel Larraz (PhD student jointly supervised with Dr V. Kosmoliaptsis, U Cambridge): Computational Analysis of Liver Organoid Self-Organization: Trajectory Modeling, Clustering Stability, and Gene Network Reconstruction</SessionItem>
          {/* <SessionItem><StrongText>11:00 – 11:30</StrongText> Coffee break</SessionItem> */}
          <SessionItem><StrongText>11:30 – 12:00 </StrongText> Friedrich-Maximilian Weberling (PhD student, jointly supervised with Prof Florian Hollfelder, Dept Biochemistry, U Cambridge): Crécerelle: Integrating gene expression and transcript usage analysis through multi-modal deep generative models</SessionItem>
          <SessionItem><StrongText>12:00 - 12:30 </StrongText> Eleanor Williams (MRC-iCASE PhD student, jointly supervised with Dr Jennifer Tan, Astra Zeneca): Integrating multiple modalities in spatial context</SessionItem>
          <SessionItem><StrongText>12:30 - 13:00 </StrongText> Floris Roos (University of Antwerp; former post-doc in the Vallier and Mohorianu labs): Human foetal organoid atlas for studying development</SessionItem>
          {/* <SessionItem><StrongText>13:15 - 14:15 </StrongText> Lunch (Maiorescu campus restaurant)</SessionItem> */}

          <Subtitle>Session 8</Subtitle>
          <SessionItem><StrongText>14:30 – 15:00</StrongText> Cristian Bulgaru (Research Assistant in the Core Bioinformatics group): Canard2.0: Co-expression ATAC and RNA dynamics (challenges of assessing chromatin openness on single-cell data)</SessionItem>
          <SessionItem><StrongText>15:00 – 15:30</StrongText> Şerban Doncean (intern in the Core Bioinformatics group and MSc student jointly supervised with Prof L Ciortuz): FALCON: Functional Analysis / Learning of Corrected Omics via (regulatory) Networks</SessionItem>
          {/* <SessionItem><StrongText>15:30 – 16:00</StrongText> Coffee break</SessionItem> */}
          <SessionItem><StrongText>16:00 – 16:45</StrongText> Irina Mohorianu (Head of Bioinformatics/ Scientific Computing @ CSCI, Head of the CORE BioInformatics group, University of Cambridge): RoSignOL: robust signature of Life</SessionItem>
          <Subtitle>Session 9</Subtitle>
          <SessionItem><StrongText>17:00 – 17:30</StrongText> Closing session</SessionItem>
        </SessionList>

      </ProgramContainer>
    </SectionContainer>
  );
};
