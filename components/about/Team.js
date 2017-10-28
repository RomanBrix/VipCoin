import React, {Component} from 'react';

export default class Team extends Component {
    render(){
        return(
            <div className="team">
                <div className="team-container">
                    <h1>Наша команда</h1>
                    {/*<p>asasfgsdk kvkvkl fklm klmasf mlas ml asmkl klmas klmads mklds aklmsad klmkams kmlds </p>*/}
                    <div className="people">
                        <div className="director">
                           <div className="team-img img-director" style={{
                               backgroundImage: `url(./src/team/director.jpg)`
                           }}/>
                            <div className="text">
                                <h2>Zooko Wilcox</h2>
                                <h3>FOUNDER AND CHIEF EXECUTIVE OFFICER</h3>
                                <p>Zooko has more than 20 years of experience in open, decentralized systems, cryptography and information security, and startups. He is recognized for his work on DigiCash, Mojo Nation, ZRTP, “Zooko's Triangle”, Tahoe-LAFS, BLAKE2, and SPHINCS. He is also the Founder of Least Authority. He sometimes blogs about health science. He tweets a lot.</p>
                            </div>
                        </div>

                        <div className="one-team">
                            <div className="team-img img-technion" style={{
                                backgroundImage: `url(./src/team/technion.jpg)`
                            }}/>
                            <div className="text">
                                <h2>Eli Ben-Sasson</h2>
                                <h3>TECHNION</h3>
                                <p>Eli is a Professor at the Computer Science Department at Technion - Israel Institute of Technology.</p>
                            </div>
                        </div>

                        <div className="one-team">
                            <div className="team-img img-mit" style={{
                                backgroundImage: `url(./src/team/mit.jpg)`
                            }}/>
                            <div className="text">
                                <h2>Madars Virza</h2>
                                <h3>MIT</h3>
                                <p>Madars is a current computer science PhD candidate at MIT, where he focuses on zero-knowledge cryptography.</p>
                            </div>
                        </div>

                        <div className="one-team">
                            <div className="team-img img-director" style={{
                                backgroundImage: `url(./src/team/project_manager.jpg)`
                            }}/>
                            <div className="text">
                                <h2>Nathan Wilcox</h2>
                                <h3>PROJECT MANAGER</h3>
                                <p>Nathan is dedicated to open, secure technologies and has over 10 years of experience in software development, performance analysis, and security audits.</p>
                            </div>
                        </div>

                        <div className="one-team">
                            <div className="team-img img-director" style={{
                                backgroundImage: `url(./src/team/engineering.jpg)`
                            }}/>
                            <div className="text">
                                <h2>Ariel Gabizon</h2>
                                <h3>ENGINEERING</h3>
                                <p>For most of his career, Ariel has focused exclusively on theoretical computer science, obtaining a PhD from the Weizmann Institute in 2008.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
