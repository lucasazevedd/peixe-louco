import React, { useState, useRef } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Perfil.css';
import PeixePhoto from '../../assets/imagens/peixe-icon.png'

function Perfil() {
    // script //
    const [detailsExpanded, setDetailsExpanded] = useState(false);
    const [achievementsExpanded, setAchievementsExpanded] = useState(false);
    const detailsContentRef = useRef(null);
    const achievementsContentRef = useRef(null);

    const toggleDetails = () => {
        setDetailsExpanded(!detailsExpanded);
    };

    const toggleAchievements = () => {
        setAchievementsExpanded(!achievementsExpanded);
    };

    const showModal = (modalId) => {
        document.getElementById(modalId).style.display = 'block';
    };

    const closeModal = (modalId) => {
        document.getElementById(modalId).style.display = 'none';
    };

    return (
        <div>
            <Header />
            <div className="profile-header">
                <img src={PeixePhoto} alt="Foto do Perfil" className="profile-picture" />
                <h1 className="profile-name">Nome do Usuário</h1>
                <p className="profile-bio">Esta é a biografia do usuário. Aqui você pode adicionar uma breve descrição sobre você.</p>
            </div>
            <div className="profile-details">
                <h2 onClick={toggleDetails} className="details-header">
                    Detalhes <span id="details-arrow" className={detailsExpanded ? 'arrow-up' : 'arrow-down'}>&#9660;</span>
                </h2>
                <div
                    id="details-content"
                    className="details-content"
                    ref={detailsContentRef}
                    style={{
                        maxHeight: detailsExpanded ? `${detailsContentRef.current.scrollHeight}px` : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease-out',
                    }}
                >
                    <p><strong>Email:</strong> usuario@example.com</p>
                    <p><strong>Telefone:</strong> (99) 99999-9999</p>
                </div>
            </div>
            <div>
                <h2 onClick={toggleAchievements} className="details-header">
                    Conquistas <span id="achievements-arrow" className={achievementsExpanded ? 'arrow-up' : 'arrow-down'}>&#9660;</span>
                </h2>
                <div
                    id="achievements-content"
                    className="details-content"
                    ref={achievementsContentRef}
                    style={{
                        maxHeight: achievementsExpanded ? `${achievementsContentRef.current.scrollHeight}px` : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease-out',
                    }}
                >
                    <h1 className="achievements-title">Conquistas</h1>
                    <div className="achievements-grid">
                        <div className="achievement-item" onClick={() => showModal('modal1')}>
                            <img src="badge1.png" alt="Insígnia 1" className="achievement-icon" />
                            <p className="achievement-name">Conquista 1</p>
                        </div>
                        <div className="achievement-item" onClick={() => showModal('modal2')}>
                            <img src="badge2.png" alt="Insígnia 2" className="achievement-icon" />
                            <p className="achievement-name">Conquista 2</p>
                        </div>
                        <div className="achievement-item" onClick={() => showModal('modal3')}>
                            <img src="badge3.png" alt="Insígnia 3" className="achievement-icon" />
                            <p className="achievement-name">Conquista 3</p>
                        </div>
                        <div className="achievement-item" onClick={() => showModal('modal4')}>
                            <img src="badge4.png" alt="Insígnia 4" className="achievement-icon" />
                            <p className="achievement-name">Conquista 4</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => closeModal('modal1')}>&times;</span>
                    <h2>Conquista 1</h2>
                    <p>Informações sobre como obter a Conquista 1.</p>
                </div>
            </div>
            <div id="modal2" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => closeModal('modal2')}>&times;</span>
                    <h2>Conquista 2</h2>
                    <p>Informações sobre como obter a Conquista 2.</p>
                </div>
            </div>
            <div id="modal3" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => closeModal('modal3')}>&times;</span>
                    <h2>Conquista 3</h2>
                    <p>Informações sobre como obter a Conquista 3.</p>
                </div>
            </div>
            <div id="modal4" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => closeModal('modal4')}>&times;</span>
                    <h2>Conquista 4</h2>
                    <p>Informações sobre como obter a Conquista 4.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default Perfil;