import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Perfil.css';
import PeixePhoto from '../../assets/imagens/peixe-icon.png'

function Perfil() {
    return(
        <div>
        <Header />
        <div class="profile-header">
            <img src={PeixePhoto} alt="Foto do Perfil" class="profile-picture" />
            <h1 class="profile-name">Nome do Usuário</h1>
            <p class="profile-bio">Esta é a biografia do usuário. Aqui você pode adicionar uma breve descrição sobre você.</p>
        </div>
        <div class="profile-details">
                <h2 onclick="toggleDetails()" class="details-header">
                Detalhes <span id="details-arrow" class="arrow-down">&#9660;</span>
            </h2>
        <div id="details-content" class="details-content">
            <p><strong>Email:</strong> usuario@example.com</p>
            <p><strong>Telefone:</strong> (99) 99999-9999</p>
        </div>
        </div>
        <div>
            <h2 onclick="toggleAchievements()" class="details-header">
                Conquistas <span id="achievements-arrow" class="arrow-down">&#9660;</span>
            </h2>
            <div id="achievements-content" class="details-content">
                <h1 class="achievements-title">Conquistas</h1>
                <div class="achievements-grid">
                    <div class="achievement-item" onclick="showModal('modal1')">
                        <img src ="badge1.png" alt="Insígnia 1" class="achievement-icon" />
                        <p class="achievement-name">Conquista 1</p>
                    </div>
                    <div class="achievement-item" onclick="showModal('modal2')">
                        <img src="badge2.png" alt="Insígnia 2" class="achievement-icon" />
                        <p class="achievement-name">Conquista 2</p>
                    </div>
                    <div class="achievement-item" onclick="showModal('modal3')">
                        <img src="badge3.png" alt="Insígnia 3" class="achievement-icon" />
                        <p class="achievement-name">Conquista 3</p>
                    </div>
                    <div class="achievement-item" onclick="showModal('modal4')">
                        <img src="badge4.png" alt="Insígnia 4" class="achievement-icon" />
                        <p class="achievement-name">Conquista 4</p>
                    </div>
                    {/*  Adicione mais conquistas conforme necessário */}
                </div>
            </div>
        </div>

        {/* Modals*/}
        <div id="modal1" class="modal">
            <div class="modal-content">
                <span class="close" onclick="closeModal('modal1')">&times;</span>
                <h2>Conquista 1</h2>
                <p>Informações sobre como obter a Conquista 1.</p>
            </div>
        </div>
        <div id="modal2" class="modal" >
            <div class="modal-content">
                <span class="close" onclick="closeModal('modal2')">&times;</span>
                <h2>Conquista 2</h2>
                <p>Informações sobre como obter a Conquista 2.</p>
            </div>
        </div>
        <div id="modal3" class="modal" >
            <div class="modal-content">
                <span class="close" onclick="closeModal('modal3')">&times;</span>
                <h2>Conquista 3</h2>
                <p>Informações sobre como obter a Conquista 3.</p>
            </div>
        </div>
        <div id="modal4" class="modal">
            <div class="modal-content">
                <span class="close" onclick="closeModal('modal4')">&times;</span>
                <h2>Conquista 4</h2>
                <p>Informações sobre como obter a Conquista 4.</p>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default Perfil;