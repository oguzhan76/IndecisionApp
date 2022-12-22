import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {
    state = {
        options: this.props.options, // :[] gets it from defaultProps
        selectedOption: undefined
    };

    onCloseOptionModal = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    onDeleteOptions = () => {
        this.setState(() => ({ options: [] }) );
    };

    onDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    onPickOption = () => {
        const randIndex = Math.floor(Math.random() * this.state.options.length);

        const option = this.state.options[randIndex];
        this.setState(() => ({ selectedOption: option}))
    };

    onAddOption = (option) => {
        if(!option) 
            return 'Enter valid item to add item';
        else if (this.state.options.indexOf(option) > -1)
            return 'This option already exists';

        this.setState((prevState) => ({
                options: [...prevState.options, option]
            }))
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options)
                this.setState(() => ({ options }));
            
        } catch (error) {
            
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length === this.state.options.length) return;
        
        const data = JSON.stringify(this.state.options)
        localStorage.setItem('options', data);
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';
        
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className='container'>
                    
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        onPickOption={this.onPickOption}/>
                    <div className='widget'>
                        <Options 
                            onDeleteOptions={this.onDeleteOptions} 
                            onDeleteOption={this.onDeleteOption}
                            options={this.state.options}/>
                        <AddOption onAddOption={this.onAddOption}/>
                    </div>
                </div>
                <OptionModal 
                    selected={this.state.selectedOption}
                    onClose={this.onCloseOptionModal}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}