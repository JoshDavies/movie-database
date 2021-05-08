import React from 'react';
import {observer} from 'mobx-react';
import {Modal, ModalBody} from "reactstrap";
import './MovieModal.scss';
import Button from "Components/Button/Button";
import * as Types from 'Pages/HomePage/Types';

type propTypes = {
    id: string,
    isModalOpen: boolean,
    movie: Types.Movie,
}

const MovieModal = ({
    id,
    isModalOpen,
    movie,
}: propTypes) => {
    return (
        <Modal id={`modal-${id}`} isOpen={isModalOpen} className={"modal-dialog-centered"}>
            <ModalBody id="movieModalBody">
                <h2>{movie.title}</h2>
                <hr />
                <p>{movie.overview}</p>
                <div className="modalButton">
                    <Button 
                        id = {'closeModalButton'}
                        children = {'Back to Movies'}
                        onClick = { () => null }
                        type = {'button'}
                    /> 
                </div>
            </ModalBody>
        </Modal>
    )
};

export default observer(MovieModal);