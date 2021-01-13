import React, { Component } from 'react'

export class gifFinder extends Component {
    constructor(props){
        super(props)
        this.state = {
            gifUrl: [],
            link: ''
        }
    }

    fetchUrl = async () => {
        try {
            const url = 'http://api.giphy.com/v1/gifs/trending?api_key=g25nBHy2WQJRvUjil4QWVNdHBBEfeYEH';
            const response = await fetch(url);
            console.log(response)
            if(response.status !== 200) {
                throw new Error("Error");
            }
            const data = await response.json();
        } catch(error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                thiis is the gifFinderPage
            </div>
        )
    }
}

export default gifFinder



