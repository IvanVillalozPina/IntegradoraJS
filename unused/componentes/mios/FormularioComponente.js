import React from "react";
import "./estilos/Formulario.css";
class FormularioComponente extends React.Component {
  constructor() {
    super();
    this.state = {
      canal: "",
      numerodesubs: 0,
      preciosub: 5,
      totalsubs: 0,

      horasemitidas: 0,
      preciohora: 3,
      totalhoras: 0,

      anunciosemitidos: 0,
      tipousuario: "",
      afiliado: 0.2,
      patrocinador: 0.5,
      totalanuncios: 0,

      region: "",
      pago: "",
      Colombiana: false,
      Europea: false,
      Mexicana: false,
    };
    this.valoresformularios = this.valoresformularios.bind(this);
    this.calculasubs = this.calculasubs.bind(this);
    this.calculahoras = this.calculahoras.bind(this);
    this.calculaanuncios = this.calculaanuncios.bind(this);
  }

  valoresformularios = ({ name, value, checked, type }) => {
    this.setState(() => {
      return { [name]: type === "checkbox" ? checked : value };
    });
  };

  calculasubs(e) {
    this.setState({
      totalsubs:
        parseInt(this.state.numerodesubs) * parseInt(this.state.preciosub),
    });
  }

  calculahoras(e) {
    this.setState({
      totalhoras:
        parseInt(this.state.horasemitidas) * parseInt(this.state.preciohora),
    });
  }

  calculaanuncios(e) {
    if (this.state.tipousuario === "A") {
      this.setState({
        totalanuncios:
          parseInt(this.state.anunciosemitidos) * parseFloat(this.state.afiliado),
      });
    } else {
      this.setState({
        totalanuncios:
          parseInt(this.state.anunciosemitidos) * parseFloat(this.state.patrocinador),
      });
    }
    switch (this.state.tipousuario) {
      case "A":
        return this.setState({ tipousuario: "0.2 USD por anuncio" });
      //    break;
      default:
        return this.setState({ tipousuario: "0.5 USD por anuncio" });
      //    break;
    }
  }

  render() {
    return (
      <div className="jumbotronFormulario">
        <div class="jumbotron">
          <h1 class="display-4">Pagos Twitch</h1>
          <hr class="my-4" />
          <div>

            <div class="row">
              <div class="col-4">
                <div >Suscripciones mensuales</div>
                <div className="margenesFormulario">
                  Nombre del canal???
                  <input
                    type="text"
                    name="canal"
                    placeholder="Nombre del canal"
                    onKeyUp={(event) => this.valoresformularios(event.target)}/>
                </div>

                <div className="margenesFormulario">
                  Suscripciones???
                  <input
                    type="text"
                    name="numerodesubs"
                    placeholder="Cantidad de suscripciones"
                    onKeyUp={(event) => this.valoresformularios(event.target)}/>
                </div>

                <div className="margenesFormulario">
                  Precio de suscripci??n???
                  <input
                    name="subs"
                    disabled="disabled"
                    value={""}
                    placeholder="1 sub = 5 USD"/>
                </div>

                <div className="margenesFormulario">
                  Pago por suscripciones???
                  <input
                    type="text"
                    name="pagoxsub"
                    value={this.state.totalsubs}/>
                </div>

<div className="margenesFormulario">
                <input
                  type="submit"
                  value="Calcula suscripciones"
                  className="btn btn-dark streched-link"
                  onClick={this.calculasubs}/>
              </div>
</div>

              <div class="col-4">
                <div className="margenesFormulario">Horas emitidas este mes</div>

                <div className="margenesFormulario">
                  Horas emitidas???
                  <input
                    type="text"
                    name="horasemitidas"
                    placeholder="Cantidad de horas"
                    onKeyUp={(event) => this.valoresformularios(event.target)}/>
                </div>

                <div className="margenesFormulario">
                  Pago por hora???
                  <input
                    name="horas"
                    disabled="disabled"
                    value={""}
                    placeholder="1 hora = 3 USD"/>
                </div>

                <div className="margenesFormulario">
                  Pago por horas emitidas???
                  <input
                    type="text"
                    name="pagoxhoras"
                    value={this.state.totalhoras}/>
                </div>
<div className="margenesFormulario">
                <input
                  type="submit"
                  value="Calcula horas"
                  className="btn btn-dark streched-link"
                  onClick={this.calculahoras}/>
              </div>
              </div>

              <div class="col-4">
                <div className="margenesFormulario">Anuncios emitidos este mes</div>
                <div className="margenesFormulario">
                  Anuncios emitidos???
                  <input
                    type="text"
                    name="anunciosemitidos"
                    placeholder="Cantidad de anuncios"
                    onKeyUp={(event) => this.valoresformularios(event.target)}/>
                </div>

                <div className="margenesFormulario">
                  Tipo de usuario???
                  <select
                    name="tipousuario"
                    onChange={(event) => this.valoresformularios(event.target)}>
                    <option value={"A"}>Afiliado</option>
                    <option value={"P"}>Patrocinador</option>
                  </select>
                </div>

                <div className="margenesFormulario">
                  Precio anuncio por tipo de usuario???
                  <input
                    name="tipousuario"
                    disabled="disabled"
                    value={""}
                    placeholder={this.state.tipousuario}/>
                </div>

                <div className="margenesFormulario">
                  Pago por anuncios emitidos???
                  <input
                    type="text"
                    name="pagoxanuncio"
                    value={this.state.totalanuncios}/>
                </div>

<div className="margenesFormulario">
                <input
                  type="submit"
                  value="Calcula anuncios"
                  className="btn btn-dark streched-link"
                  onClick={this.calculaanuncios}/>
              </div>
            </div>
            </div>

            <div class="row">
              <div className="margenesFormulario">Forma de transferencia</div>
              <div className="margenesFormulario">
                Regi??n???
                <select
                  name="region"
                  onChange={(event) => this.valoresformularios(event.target)}>
                  <option value={"MX"}>M??xico</option>
                  <option value={"USA"}>Estados Unidos</option>
                  <option value={"CAN"}>Canada</option>
                  <option value={"COL"}>Colombia</option>
                  <option value={"EU"}>Espa??a</option>
                </select>
              </div>
              <div className="margenesFormulario">
                Forma de pago???
                <input
                  type="radio"
                  name="pago"
                  value={"Paypal"}
                  onChange={(event) => this.valoresformularios(event.target)}/>
                Paypal???
                <input
                  type="radio"
                  name="pago"
                  value={"MasterCard"}
                  onChange={(event) => this.valoresformularios(event.target)}/>
                MasterCard???
                <input
                  type="radio"
                  name="pago"
                  value={"Visa"}
                  onChange={(event) => this.valoresformularios(event.target)}/>
                Visa???
                <input
                  type="radio"
                  name="pago"
                  value={"Transferencia"}
                  onChange={(event) => this.valoresformularios(event.target)}/>
                Transferencia???
              </div>
              <div className="margenesFormulario">
                Cambio de moneda??? 
                MXN
                <input
                  type="checkbox"
                  name="Mexicana"
                  value="MXN"
                  onChange={(event) => this.valoresformularios(event.target)}/>
                ???COP
                <input
                  type="checkbox"
                  name="Colombiana"
                  value="COP"
                  onChange={(event) => this.valoresformularios(event.target)}/>
                ???EU
                <input
                  type="checkbox"
                  name="Europea"
                  value="EU"
                  onChange={(event) => this.valoresformularios(event.target)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormularioComponente;
