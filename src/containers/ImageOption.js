import React, { useState, useEffect } from 'react';

import Title from '../components/UI/Title';
import usefetch from '../Hooks/usefetch';

const ImageOption = props => {

    useEffect(() => {
        document.title = 'Image Loop';
    })

    const response = usefetch();
    const [imageList, setImageList] = useState([]);
    useEffect(() => {
        setImageList(response);
        console.log(response);
    }, [response])

    const [selectedImage, setSelectedImage] = useState(undefined);
    // useEffect(() => {
    //     console.log("Current SelectedOption: ");
    // }, [])

    const [newImageSource, setNewImageSource] = useState("");
    const [newInterval, setNewInterval] = useState("");
    const intervalList = [1, 2, 3, 4, 5];

    return (
        <React.Fragment>
            <Title
                headerTitle="Image Loop"
                comments="A list of Images to be looped."
            />
            <div className="row">
                <div className="col-2">
                    <button className="btn btn-outline-secondary btn-block" onClick={() => { }}>Up</button>
                    <button className="btn btn-outline-secondary btn-block" onClick={() => { }}>Down</button>
                    <button className="btn btn-outline-secondary btn-block" onClick={() => { }}>Delete</button>
                    <select
                        type="number"
                        style={{ marginTop: "8px" }}
                        className="form-control align-items-center"
                        id="interval"
                        placeholder={"Current Interval: "}
                        value={newInterval}
                        onChange={event => setNewInterval(event.target.value)}
                    >
                        {intervalList.map((item, index) => {
                            return <option key={item} value={item}>Time Interval: {item}</option>
                        })}
                    </select>
                </div>
                <div className="col-5">
                    <select
                        className="form-control"
                        size="9"
                        value={selectedImage}
                        onChange={event => { setSelectedImage(event.target.value) }}
                    >
                        {imageList.map((image, index) => {
                            return <option key={image} value={image}>{image}</option>
                        })}
                    </select>
                </div>

                <div className="col-3">

                    <input className="form-control"
                        type="text"
                        placeholder="Add a new image source"
                        value={newImageSource}
                        onChange={event => {
                            setNewImageSource(event.target.value);
                        }}
                    />

                    <button className="btn btn-outline-secondary btn-block"
                        style={{ marginTop: "8px", marginBottom: "8px" }}
                        onClick={() => { }}>Add Image URL</button>

                    <button className="btn btn-outline-dark btn-block"
                        style={{ marginTop: "8px", marginBottom: "8px", outline: "rgb(0,0,0)" }}
                        onClick={() => { }}>Update ImageList</button>

                    <button className="btn btn-outline-dark btn-block"
                        style={{ marginTop: "8px", marginBottom: "8px" }}
                        onClick={() => { }}>Reload ImageList</button>
                </div>

            </div>

            <br />
        </React.Fragment>
    );
}

// const mapStateToProps = (state) => ({
//     imageList: state.imageList,
// })

// const mapDispatchToProps = {
//     setImageList,
// }

export default ImageOption;