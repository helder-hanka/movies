import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchVideos, deleteVideo, likeVideo, disLikeVideo, filterCategory } from '../Redux/Actions/actionListVideos';
import './ListVideosContainer.css';
import { AiFillDislike } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';
import ReactPaginate from "react-paginate";

const ListVideosContainer = ({ videosData, apiVideos, deleteVideo, likes, dislikes, filterCategory }) => {

    const [searchCategory, setSearchCategory] = useState("")
    const [pageNumber, setPageNumber] = useState(0);

    

    
    
    useEffect(() => {
        apiVideos()
    }, [apiVideos])

    const handleSubmit = (e) => {
        e.preventDefault()
        filterCategory(searchCategory)
    }

    const currentTodos = videosData.fetcheVideos && videosData.fetcheVideos.slice(0, 50)

    const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(currentTodos.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

    const displayVideo = videosData.isLoading ?(
        <p> Loading... </p>
    ) :videosData.error !== "" ? (
        <p> {videosData.error} </p>
    )
    :
    (
        currentTodos.slice(pagesVisited, pagesVisited + usersPerPage).map( data => {
            return (
                <div key={data.id} className="column">
                    <div className="title-button">
                        <button onClick={() => deleteVideo(data.id)}><TiDelete /></button>
                        <h1><strong>{ data.title }</strong></h1>
                    </div>
                    <div className="card">
                        <img src={ data.image } alt={data.title} />
                    </div>
                    <h3>{ data.category }</h3>
                    <div className="buttonLikesDislikes">
                        <button onClick={ () => likes(data.id) }>
                            <AiFillLike />
                            <span className="likes">
                                { data.likes }
                            </span>
                        </button>
                        <button onClick={()=> dislikes(data.id)}>
                            <AiFillDislike/>
                            <span className="dislikes">
                                { data.dislikes }
                            </span>
                        </button>
                    </div>
                    <hr />
                </div>
            )
        })
    )

    return (
        <div className="ListVideosContainer">
            <button className="btnAllVideo" onClick={() => apiVideos()}>ALL videos</button>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setSearchCategory( e.target.value)} value={searchCategory} type="text"/>
                <button>OK</button>
                
            </form>
            <div className="row">
                {displayVideo}
            </div>
            <div className="containerPagination">
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        videosData: state.listVideos
    }
}

const dispatchToProps = dispatch => {
    return {
        apiVideos: () => dispatch(fetchVideos()),
        deleteVideo: (id) => dispatch(deleteVideo(id)),
        likes: (id) => dispatch(likeVideo(id)),
        dislikes: (id)=> dispatch(disLikeVideo(id)),
        filterCategory: (param) => dispatch(filterCategory(param))
    }
}

export default connect(mapStateToProps, dispatchToProps)(ListVideosContainer)
