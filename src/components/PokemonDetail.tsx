import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IPokemonDetail } from '../App';

const style = {
    position: 'absolute' as 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: '10px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    paddingBottom: '10px'
};

interface Props {
    open: boolean,
    handleClose: () => void,
    poke: IPokemonDetail | undefined

}

const KeepMountedModal: React.FC<Props> = ({ open, handleClose, poke }) => {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                disableEnforceFocus={false}
            >
                <Box sx={style}>
                    <Box sx={{
                        width: '100%',
                        backgroundColor: '#f2cc8f',
                        backgroundImage: 'linear-gradient(0deg,#f2cc8f,#f8f3d9)',
                        height: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        borderRadius: '10px',
                    }}>
                        <img src={poke?.sprites.front_default} alt="" />
                        <Typography id="keep-mounted-modal-title" variant="h4" component="h2">
                            {poke?.name}
                        </Typography>
                    </Box>
                    <Typography id="keep-mounted-modal-title" variant="h5" component="h2">
                        Abilities:
                    </Typography>
                    {
                        poke?.abilities?.map(item => (
                            <Typography id="keep-mounted-modal-title" variant="body2" component="h2">
                                {item?.ability.name}
                            </Typography>
                        ))
                    }
                </Box>
            </Modal>
        </div>
    );
}

export default KeepMountedModal;