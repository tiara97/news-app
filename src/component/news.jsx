import React from 'react'
import Axios from 'axios'
import {
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Dropdown, Card, CardImg, CardText, CardBody, CardTitle, Button, Container
} from 'reactstrap'

const APIkey = '&apiKey=1ba608d6a028441980f7f11e807d71c9'
const URL = 'http://newsapi.org/v2/top-headlines?'
const indo = 'country=id'
const usa = 'country=us'
const aus = 'country=au'
const sin = 'country=sg'
const mal = 'country=my'
const mix = ''
const business = 'category=business'
const technology = 'category=technology'
const science = 'category=science'


class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            dataCountry: ['Indonesia', 'USA', 'Australia', 'Singapore', 'Malaysia'],
            category: ['Business', 'Technology', 'Science'],
            selectCountry: 'Indonesia'
        }
    }
    componentDidMount() {
        Axios.get(URL + indo + '&' + technology + APIkey)
            .then(response => {
                this.setState({ data: response.data.articles })
            })
    }

    changeCountry = (index) => {
        console.log(this.state.dataCountry[index])
        let country = this.state.dataCountry[index]
        if (country === 'Indonesia') {
            Axios.get(URL + indo + APIkey)
                .then(response => {
                    this.setState({ data: response.data.articles, mix: URL+indo, selectCountry: country })
                })
        } else if (country === 'USA') {
            Axios.get(URL + usa + APIkey)
                .then(response => {
                    this.setState({ data: response.data.articles, mix: URL+usa, selectCountry: country })
                })
        } else if (country === 'Australia') {
            Axios.get(URL + aus + APIkey)
                .then(response => {
                    this.setState({ data: response.data.articles, mix: URL+aus, selectCountry: country })
                })
        } else if (country === 'Singapore') {
            Axios.get(URL + sin + APIkey)
                .then(response => {
                    this.setState({ data: response.data.articles, mix: URL+sin, selectCountry: country })
                })
        } else if (country === 'Malaysia') {
            Axios.get(URL + mal + APIkey)
                .then(response => {
                    this.setState({ data: response.data.articles, mix: URL+mal, selectCountry: country })
                })
        }
    }
    changeCategory = (index) => {
        console.log(this.state.category[index])
        console.log(this.state.mix)
        let category = this.state.category[index]
        if (category === 'Business') {
            Axios.get(this.state.mix + '&' + business + APIkey)
                .then(response => {
                    this.setState({ data: response.data.articles})
                })
        } else if (category === 'Technology') {
            Axios.get(this.state.mix + '&' + technology + APIkey)
                .then(response => {
                    this.setState({ data: response.data.articles})
                })
        } else if (category === 'Science') {
            Axios.get(this.state.mix + '&' + science + APIkey)
                .then(response => {
                    this.setState({ data: response.data.articles})
                })
    }
}
    dropdownCountry = () => {
        return (
            <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="a" className="nav-link" caret>
                    Filter by Country
            </DropdownToggle>
                <DropdownMenu>
                    {this.state.dataCountry.map((item, index) => <DropdownItem onClick={() => this.changeCountry(index)} active>{item}</DropdownItem>)}
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    dropdownCategory = () => {
        return (
            <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="a" className="nav-link" caret>
                    Filter by Category
            </DropdownToggle>
                <DropdownMenu>
                    {this.state.category.map((item, index) => <DropdownItem onClick={() => this.changeCategory(index)} active>{item}</DropdownItem>)}
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    renderCard = () => {
        console.log(this.state.selectCountry)
        console.log(this.state.mix)
        console.log(typeof(this.state.mix))
        return this.state.data.map((item) => {
            return (
                <div style={{ width: '30%', height: '600px', margin: '10px' }}>
                    <Card>
                        <CardImg top width="100%" src={item.urlToImage} alt="article-img" />
                        <CardBody>
                            <CardTitle style={{ fontWeight: '700', fontSize: '18px' }}>{item.title}</CardTitle>
                            <CardText>{item.description}</CardText>
                            <Button href={item.url}>Klik selengkapnya</Button>
                        </CardBody>
                    </Card>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>Request API</h1>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {this.dropdownCountry()}
                    {this.dropdownCategory()}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {this.renderCard()}
                </div>

            </div>
        )
    }
}
export default News