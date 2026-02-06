import InputText from "./InputText.jsx";
import { IoClose } from "react-icons/io5";
import {closeModal} from "../lib/handleModal.js";
import {saveToLocalStorage} from "../lib/handleLocalStorage.js";

function ModalCreatePost(props) {
    const {modal, setModal} = props

    return (
        <div className={`bg-[#00000020] ${modal} items-center justify-center w-full absolute top-0 py-20`}>
            <div className={'flex flex-col gap-4 w-3/5 rounded-xl bg-white pb-15 pt-4 px-8'}>
                <button onClick={()=>closeModal(setModal)} className={'self-end'}>
                    <IoClose color={'red'} size={30} className={'border border-red-700 rounded mb-5 cursor-pointer'}/>
                </button>
                <h2 className={'mb-5'}>Create New Post</h2>
                <InputText type={'text'} id={'title'} name={'title'} placeholder={'Your post title'}>Title</InputText>
                <InputText type={'text'} id={'slug'} name={'slug'} placeholder={'Your post slug (optional)'}>Slug <span>*optional</span></InputText>
                <InputText type={'text'} id={'content'} name={'content'} placeholder={'Your post content'}>Content</InputText>
                <InputText type={'text'} id={'urlImg'} name={'urlImg'} placeholder={'Your url image main post'}>Image Url</InputText>
                <button className={'py-3 rounded bg-black text-white cursor-pointer'} onClick={()=>saveToLocalStorage()}>Post Content</button>
            </div>
        </div>
    )
}

export default ModalCreatePost