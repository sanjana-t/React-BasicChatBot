class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet = () => {
      const message = this.createChatBotMessage("Hello friend.");
      this.addMessageToState(message);
    };
  
    handleJavascriptQuiz = () => {
      const message = this.createChatBotMessage(
        "Fantastic. Here is your quiz. Good luck!",
        {
          widget: "javascriptQuiz",
        }
      );
  
      this.addMessageToState(message);
    };
  
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;


// class ActionProvider {
//     constructor(
//      createChatBotMessage,
//      setStateFunc,
//      createClientMessage,
//      stateRef,
//      createCustomMessage,
     
//    ) {
//      this.createChatBotMessage = createChatBotMessage;
//      this.setState = setStateFunc;
//      this.createClientMessage = createClientMessage;
//      this.stateRef = stateRef;
//      this.createCustomMessage = createCustomMessage;
//    }
//    greet =() =>{
//         const message = this.createChatBotMessage('Hello Friend')
//         this.addMessageToState(message);
//     }

//    addMessageToState =(message)=>{
//         this.setState((prevState)=>({
//             ...prevState,
//             messages:[...prevState.messages,message],
//         }));
//    };
//  }
 
//  export default ActionProvider;