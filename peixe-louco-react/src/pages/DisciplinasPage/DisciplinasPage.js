import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import prtLogo from '../../assets/imagens/prt-logo.png';
import mtmLogo from '../../assets/imagens/mtm-logo.png';
import cncLogo from '../../assets/imagens/cnc-logo.png';
import './DisciplinasPage.css';

function DisciplinasPage() {
  return (
    <div>
      <Header />
      <section className="welcome-content" id="disciplinas">
        <h1 id="DISCIPLINAS">DISCIPLINAS</h1>
      </section>

      <div className="disciplinasDiv">
        <div className="disciplina">
          <a href="/prt-niveis">
            <img id="prt-logo" src={prtLogo} alt="prt logo" />
          </a>
          <h1>PORTUGUÊS</h1>
        </div>
        
        <div className="disciplina">
          <a href="/mtm-niveis">
            <img id="mtm-logo" src={mtmLogo} alt="mtm logo" />
          </a>
          <h1>MATEMÁTICA</h1>
        </div>
        
        <div className="disciplina">
          <a href="/bio-niveis">
            <img id="cnc-logo" src={cncLogo} alt="cnc logo" />
          </a>
          <h1>CIÊNCIAS</h1>
        </div>
      </div>
      
      <p></p>
      
      {/* <div className="disciplinasDiv">
        <div className="disciplina">
          <img id="fis-logo" src="assets/imagens/" alt="fisica logo" />
          Física
        </div>
        
        <div className="disciplina">
          <img id="geo-logo" src="assets/imagens/" alt="geo logo" />
          Geografia
        </div>  
        
        <div className="disciplina">
          <img id="quim-logo" src="assets/imagens/" alt="quimica logo" />
          Química
        </div>
      </div> */}

      <p></p>

      <Footer />
    </div>
  );
}

export default DisciplinasPage;
