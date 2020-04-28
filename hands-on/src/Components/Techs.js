import React, { Component } from "react";

export default class TechsComponent extends Component {
    constructor() {
        super();
        this.state = {
            techs: ['Node JS', 'React JS', 'React Native'],
            newTech: '',
            mouseOver: false
        }

        this.handleChange = e => {
            this.setState({ newTech: e.target.value });
        }

        this.submit = e => {
            e.preventDefault();
            if (this.state.newTech.length < 1) {
                alert('Informe')
                return false
            }
            this.setState({ techs: [...this.state.techs, this.state.newTech], newTech: '' })
            document.querySelector('.alert').style.display = "block";
            setTimeout(() => document.querySelector('.alert').style.display = "none", 100000);
            document.querySelector('input').focus();
        }

        this.addClass = e => e.target.classList.add('active')


        this.removeClass = e => e.target.classList.remove('active')

        this.style = {marginTop: '74px'}
    }

    componentDidMount(){
        document.querySelector('.alert').style.display = "none";
    }

    render() {
        return (
            <>
                <form action="#" method="get" className="mt-3">
                    <div className="form-group">
                        <input className="form-control" type="text" onChange={this.handleChange} value={this.state.newTech} />
                    </div>
                    <button className="btn btn-primary" onClick={this.submit} >Adicionar</button>
                </form>

                <div  className="alert alert-success mt-2" role="alert">
                    Tecnologia adicionada com sucesso.
                </div>

                <ul style={{marginTop: '74px', position: "static"}} className="list-group  border border-dark">
                    {this.state.techs.map((tech, index) =>
                        <li
                            key={index}
                            className={`list-group-item `}
                            onMouseOver={this.addClass}
                            onMouseOut={this.removeClass}
                        >
                            {tech}
                        </li>)}
                </ul>
                
            </>
        )
    }
}