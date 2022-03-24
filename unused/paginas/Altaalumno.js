import React from "react";

class Altaalumno extends React.Component {
  constructor() {
    super();
    this.state = {
      numero1: 0,
      numero2: 0,
      tipo: "",
      status: "",
      genero: "",
      area1: false,
      area2: false,
      total: 0,
    };
    this.valoresformularios = this.valoresformularios.bind(this);
    this.calculatotal = this.calculatotal.bind(this);
  }

  valoresformularios = ({ name, value, checked, type }) => {
    this.setState(() => {
      return { [name]: type === "checkbox" ? checked : value };
    });
  };

  calculatotal(e) {
    if (this.state.tipo === "A") {
      this.setState({
        total:
          parseInt(this.state.numero1) * parseInt(this.state.numero2) + 100,
      });
    } else {
      this.setState({
        total:
          parseInt(this.state.numero1) * parseInt(this.state.numero2) + 400,
      });
    }

    switch (this.state.numero1) {
      case "7":
        return this.setState({ status: "Buen empleado" });
      //    break;
      default:
        return this.setState({ status: "Mal empleado" });
      //    break;
    }
  }

  render() {
    return (
      <div>
          {/* <div>
              <pre>{JSON.stringify(this.state,null,2)}</pre>
          </div> */}
      <div>Teclea días trabajados
          <input
            type="text"
            name="numero1"
            placeholder="Días trabajados"
            onKeyUp={(event) => this.valoresformularios(event.target)}
            // onKeyUp={this.leenumero1}
          />
        </div>
        <div>
          Teclea salario diario{" "}
          <input
            type="text"
            name="numero2"
            placeholder="Salario diario"
            onKeyUp={(event) => this.valoresformularios(event.target)}
            // onKeyUp={this.leenumero2}
          />
        </div>
        <div> 
          Tipo
          <select
            name="tipo"
            onChange={(event) => this.valoresformularios(event.target)}
            //onChange={this.cambiatipo}
            //Combo 
          >
            <option value={"A"}>A</option>
            <option value={"B"}>B</option>
            <option value={"C"}>C</option>
          </select> 
        </div>
        <div>
          Área de trabajo
          <input
            type="checkbox"
            name="area1"
            value="torreon"
            onChange={(event) => this.valoresformularios(event.target)}
          />{" "}
          Torreón
          <input
            type="checkbox"
            name="area2"
            value="toluca"
            onChange={(event) => this.valoresformularios(event.target)}
          />{" "}
          Tóluca
        </div>
        <div>
          Genero
          <input
            type="radio"
            name="genero"
            value={"m"}
            onChange={(event) => this.valoresformularios(event.target)}
          />{" "}
          Masculino
          <input
            type="radio"
            name="genero"
            value={"f"}
            onChange={(event) => this.valoresformularios(event.target)}
          />{" "}
          Femenino
        </div>
        <input
          type="submit"
          value="Checa"
          className="btn btn-primary streched-link"
          onClick={this.calculatotal}
        />
        <div>
          Total <input type="text" name="total" value={this.state.total} />
        </div>
        <div>
          Tipo empleado{" "}
          <input
            type="text"
            name="tiepoempleado"
            value={this.state.status}
            disabled="disabled"
          />
        </div>
      </div>
    );
  }
}

export default Altaalumno;

//  ctrl + k (ctl + c) = comentar
//  ( + u) = descomentar

// this.leenumero1 = this.leenumero1.bind(this);
// this.leenumero2 = this.leenumero2.bind(this);
// this.cambiatipo = this.cambiatipo.bind(this);

//   leenumero1(e) {
//     console.log(e.target.value);
//     this.setState({ numero1: e.target.value });
//     // console.log(this.state.numero1)
//   }

//   leenumero2(e) {
//     console.log(e.target.value);
//     this.setState({ numero2: e.target.value });
//     // console.log(this.state.numero1)
//   }

//   cambiatipo(e) {
//     this.setState({ tipo: e.target.value });
//   }
