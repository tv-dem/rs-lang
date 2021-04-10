import React, {useEffect, useState} from "react";
import './SettingsWord.scss'
import {SettingFilled} from "@ant-design/icons";
import { Modal } from "antd";
import {Switch} from "antd";

const SettingsWords = ({setSettings, options, translate, isAuth}:any) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [localTranslate, setLocalTranslate] = useState(translate)
    const [localOptions, setLocalOptions] = useState(options)
    const showModal = () => {
        setLocalOptions(options);
        setLocalTranslate(translate);
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setSettings(localTranslate, localOptions);
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onChangeTranscription = (checked:boolean) => {
        setLocalTranslate(checked)
    }
    const onChangeOptions = (checked:boolean) => {
        setLocalOptions(checked)
    }
    return(

        <>
            <SettingFilled className='settings-words' onClick={showModal}/>
            <Modal title="Настройки" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className='modal-settings'>
                    <span>отображать перевод</span>
                    <Switch checked={localTranslate} onChange={onChangeTranscription} />
                </div>
                <div className='modal-settings'>
                    <span>отображать опции у слов</span>
                    <Switch checked={localOptions && isAuth} disabled={!isAuth} onChange={onChangeOptions} />
                </div>
            </Modal>
        </>
    )
}

export default SettingsWords;
