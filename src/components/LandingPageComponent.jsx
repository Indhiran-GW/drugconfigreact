import GridComponet from "./GridComponet.jsx";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import React from "react";

const LandingPageComponent = () => {

    const [selected, setSelected] = React.useState(0);

    const column = [
        { field: 'Name', title: 'Name' ,filtertype: 'text'},
        { field: 'EffectiveDate', title: 'Effective Date', format: '{0:dd/MM/yyyy}' ,filtertype: 'date' },
        { field: 'TermDate', title: 'Term Date', format: '{0:dd/MM/yyyy}' ,filtertype: 'date'},
        { field: 'LastModified', title: 'Last Modified', format: '{0:dd/MM/yyyy}',filtertype: 'date' },
        ];

    const mockData = [
      { Name : 'Acne Agents, Oral' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Acne Agents, Topical' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Alzheimers Agents' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Antibiotics, Topical' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Antibiotics, Vaginal' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Antidepressants, Other' , EffectiveDate :  new Date('2024-08-09'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Antidepressants, SSRI' , EffectiveDate :  new Date('2024-08-09'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Antidepressants, Tricyclic' , EffectiveDate :  new Date('2024-08-09'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Antifungals, Oral' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Antifungals, Topical' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Antihypertensives, Sympatholytics' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Antihyperuricemics' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Antiparasitics, Topical' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Antiparkinsons Agents' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Antivirals, Oral/Nasal' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Antivirals, Topical' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Bile Salts' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Bladder Relaxant Preparations' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Calcium Channel Blockers (Oral)' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Cephalosporins and Related Antibiotics' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Colony Stimulating Factors' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Epinephrine, Self-Injected' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Fluoroquinolones, Oral' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Glucagon Agents' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Hepatitis C Agents' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'H.Pylori Treatment' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Hypoglycemics, Insulin' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Hypoglycemics, Metformin' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Immune Globulins' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Immunosuppressives, Oral' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Intranasal Rhinitis Agents' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Iron, Oral' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Lincosamides/Oxazolidinones/Streptogramins' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Ophthalmics, Allergic Conjunctivitis' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Ophthalmics, Antibiotic - Steroid Combinations' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Ophthalmics, Antibiotic' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Ophthalmics, Anti-Inflammatories' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Ophthalmics, Anti-Inflammatory/Immunomodulators' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Ophthalmics, Glaucoma Agents' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Otic Antibiotics' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Otic Anti-Infectives/Anesthetics' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Pancreatic Enzymes' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Pediatric Vitamin Preparations' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Penicillins' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Platelet Aggregation Inhibitors' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Potassium Binders' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Progestins for Cachexia' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Rosacea Agents, Topical' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Smoking Cessation' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Steroids, Topical' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Tetracyclines' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Thrombopoiesis Stimulating Proteins' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Ulcerative Colitis Agents' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Urea Cycle Disorders, Oral' , EffectiveDate :  new Date('2023-01-26'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Macrolides/Ketolides' , EffectiveDate :  new Date('2024-09-24'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Prenatal Vitamins' , EffectiveDate :  new Date('2024-09-24'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')},    
      { Name : 'Proton Pump Inhibitors' , EffectiveDate :  new Date('2024-09-24'), TermDate : new Date('2078-12-31')   , LastModified : new Date('2025-06-10')}
    ];

    return (
        <>               

        <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <h1 style={{ margin: '4px' }}> RuleSet Configurations</h1>
            </div>
            <div>
                <input type="button" className="button" value="New RuleSet" />            
            </div>
        </div>

        <br></br>

        <TabStrip selected={selected} onSelect={(e) => setSelected(e.selected)} className="custom-tabstrip"> 
            <TabStripTab title="Active RuleSet">
                <br />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10">
                            <h2>Active RuleSets</h2>
                            <div style ={{ marginTop: '5px'}}>
                                <GridComponet columns={column} data={mockData}></GridComponet>
                            </div>
                        </div>
                    </div>
                </div>
            </TabStripTab>
            
            <TabStripTab title="Pending RuleSets">
                <br />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10">
                            <h2>Pending RuleSets</h2>
                            <div style ={{ marginTop: '5px'}}>
                                <GridComponet columns={column} data={mockData}></GridComponet>
                            </div>
                        </div>
                    </div>
                </div>
            </TabStripTab>
            
            <TabStripTab title="Expired RuleSets">
                <br />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10">
                            <h2>Expired RuleSets</h2>
                            <div style ={{ marginTop: '5px'}}>
                                <GridComponet columns={column} data={mockData}></GridComponet>
                            </div>
                        </div>
                    </div>
                </div>
            </TabStripTab>
            
            <TabStripTab title="Deactivated RuleSets">
                <br />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10">
                            <h2>Deactivated RuleSets</h2>
                            <div style ={{ marginTop: '5px'}}>
                                <GridComponet columns={column} data={mockData}></GridComponet>
                            </div>
                        </div>
                    </div>
                </div>
            </TabStripTab>
        </TabStrip>
                
        </>
    )

}

export default LandingPageComponent;
