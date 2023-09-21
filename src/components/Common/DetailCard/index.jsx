import React from "react";
import {AiOutlineLink} from "react-icons/ai";

const DetailCard = (props) => {
    return(
        <div className={'card gradient-background'}>
            <div className={'card-body card-content'}>
                <img alt={'cover-image'} className={'card-image'} src={props?.coverImage}/>
                <div className={'card-right'}>
                    <h4 className={'card-heading'}>{props?.title}</h4>
                    <p className={'card-text'}>
                        {props?.description}
                    </p>
                    <div>
                        <AiOutlineLink color={'#00626B'} size={24}/>
                        <a className={'card-link'} href={props?.videoLink} target={'_blank'}>Watch it here</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailCard;