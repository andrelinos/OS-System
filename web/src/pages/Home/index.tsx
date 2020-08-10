import React from 'react'

import OpenOs from '../../assets/images/icons/plus-square.svg'
import EditOs from '../../assets/images/icons/edit.svg'
import DoneOs from '../../assets/images/icons/done.svg'
import SearchOs from '../../assets/images/icons/search.svg'
import EstimateOs from '../../assets/images/icons/file-text.svg'
import LogOs from '../../assets/images/icons/archive.svg'
import MenuOs from '../../assets/images/icons/menu.svg'

import './styles.css'

function Home() {
  return (
    <div id="page-home">
      <div id='page-home-content' className="content">
        <aside>
          <div className="os-options">

            <button>
              <img src={OpenOs} alt="" />
              <div className="title-button">Nova</div>
            </button>

            <button>
              <img src={EditOs} alt="" />
              <div className="title-button">Editar</div>
            </button>

            <button>
              <img src={DoneOs} alt="" />
              <div className="title-button">Encerrar</div>
            </button>

            <button>
              <img src={SearchOs} alt="" />
              <div className="title-button">Localizar</div>
            </button>

            <button>
              <img src={EstimateOs} alt="" />
              <div className="title-button">Orçamento</div>
            </button>

            <button>
              <img src={LogOs} alt="" />
              <div className="title-button">Relatório</div>
            </button>





          </div>
        </aside>
        <main>
          <div className="menu-container">

            <div className="menu-left-container">
              <button>
                <img src={MenuOs} alt="" />
              </button>
            </div>

            <div className="menu-right-container">
              <button>
                <img src={MenuOs} alt="" />
              </button>
              <button>
                <img src={MenuOs} alt="" />
              </button>
              <button>
                <img src={MenuOs} alt="" />
              </button>
            </div>

          </div>

          <footer></footer>
        </main>
      </div>
    </div>
  )
}

export default Home;