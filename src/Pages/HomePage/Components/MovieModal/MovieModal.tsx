import React from 'react';
import {observer} from 'mobx-react';
import {Modal, ModalBody} from "reactstrap";
import './MovieModal.scss';
import Button from "Components/Button/Button";
import UserScoreBar from '../userScoreBar/UserScoreBar';
import * as Types from 'Pages/HomePage/Types';

type propTypes = {
    id: string,
    isModalOpen: boolean,
    movie: Types.Movie,
    closeModal: () => void,
}

const MovieModal = ({
    id,
    isModalOpen,
    movie,
    closeModal,
}: propTypes) => {
    return (
        <Modal id={`modal-${id}`} isOpen={isModalOpen} className={"modal-dialog-centered"}>
            <ModalBody id="movieModalBody">
                <h2>{movie.title}</h2>
                <hr />
                <p>{movie.overview}</p>
                <UserScoreBar userScore={movie.vote_average}/>
                <div className="modalButton">
                    <Button 
                        id = {'closeModalButton'}
                        children = {'Back to Movies'}
                        onClick = { () => closeModal() }
                        type = {'button'}
                    /> 
                </div>
            </ModalBody>
        </Modal>
    )
};

export default observer(MovieModal);