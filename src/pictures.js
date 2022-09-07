import React, { Component } from 'react'

export default class Pictures extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //type of pitcures
            wantsTravel: false,
            wantsNature: false,
            wantsSun: false,
            wantsCity: false,
        };
    }
    handleChange = event => {
        this.setState({ value: event.target.value });
    }
    /**
     * 
     * @param {Boolean} wantsTravel decides if they want fotos to appear
     * @param {Boolean} wantsNature decides if they want nature fotos
     * @param {Boolean} wantsSun decides if they sunrise/set fotos
     * @param {Boolean} wantsCity decides if they want city fotos or not
     */
    filterFotos = (wantsTravel, wantsNature, wantsSun, wantsCity) => {
        console.log("fotos")
    }
    render() {
        const { wantsTravel, wantsNature, wantsSun, wantsCity } = this.state
        return (
            <div>
                <nav className="navbar bg-light">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">Pictures</span>
                    </div>
                </nav>
                <div className='container'>
                    <div className='row p-2'>
                        <div className='col-sm-12 text-center'>
                            <h2>This app will show you all of my picutres that I have taken and you can filter by type of picture; (Travel,Nature,Sunset\Sunrise,City)- pictures can be in multiple categories</h2>
                        </div>
                    </div>
                    <div className='row p-2'>
                        <div className='col-sm-12 col-md-4'>
                            <ul className='text-start'>
                                <li>Travel- any picture I've taken that is not in the United States</li>
                                <li>Nature- any picture of the landscape- usually mountains / water</li>
                                <li>Sunset\Sunrise- pictures of the sunsets and sunrise</li>
                                <li>City- pictures in/of the city</li>
                            </ul>
                        </div>
                        <div className='col-sm-12 col-md-8'>

                            <select>
                                <option defaultValue={wantsTravel}>Travel</option>
                                <option defaultValue={wantsNature}>Nature</option>
                                <option selected defaultValue={wantsSun}>Sunset \ Sunrise</option>
                                <option defaultValue={wantsCity}>City</option>
                            </select>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
