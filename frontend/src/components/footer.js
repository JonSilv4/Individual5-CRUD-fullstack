import React from "react";
import '../styles/footer.css';



function Footer() {
    return (  
        <div className="footerAll">
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>Para mais informações:</h4>

                        <a href="/#">
                            <p>camisasfut@gmail.com</p>
                        </a>

                    </div>
                    <div className="sb__footer-links_div">
                    <h4>Quer falar com a gente?</h4>

                    <a href="/#">
                            <p>Contato: (99) 9999-99999</p>
                        </a>

                    </div>
                    
                    <div className="sb__footer-links_div">
                    <h4>Endereço:</h4>

                    <a href="/#">
                            <p>Rua Dona Isabel, 700 - Bonsucesso</p>
                        </a>

                    </div>
                    
                </div>

                <hr></hr>

            <div className="sb__footer-below">
                <div className="sb__footer-copyright">
                    <p>
                        @{new Date().getFullYear()} CAMISAS FUT. Todos os direitos reservados.
                    </p>
                </div>
                <div className="sb__footer-below-links">
                    <a href="/#"><div><p>Termos e Condições</p></div></a>

                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Footer;