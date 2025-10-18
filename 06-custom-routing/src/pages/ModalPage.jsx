import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
function ModalPage (){
    const  [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => { 
        setShowModal(false);
    };
    const actionBar = <div>
        <Button onclick={handleClose} primary>I accept</Button>
    </div>
    
    const modal =(
    <Modal  onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important agreement for you to accept</p>
    </Modal>
    );

    return(
    <div>
        <Button onclick={handleClick} primary>
         Open Modal
        </Button>
        {showModal && modal }    
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet nisl diam. Praesent malesuada turpis venenatis, suscipit nibh non, molestie dolor. Pellentesque sit amet sem eu magna pretium tristique. Donec fermentum, felis ut bibendum congue, massa lacus tristique urna, id maximus ex lectus et sem. Nullam id scelerisque purus, elementum ultricies lorem. Aliquam tristique, odio quis mollis porttitor, ante ipsum fermentum magna, quis aliquam nibh quam non velit. Aenean finibus dui lectus, eu vulputate ex porta a.
       </p>
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet nisl diam. Praesent malesuada turpis venenatis, suscipit nibh non, molestie dolor. Pellentesque sit amet sem eu magna pretium tristique. Donec fermentum, felis ut bibendum congue, massa lacus tristique urna, id maximus ex lectus et sem. Nullam id scelerisque purus, elementum ultricies lorem. Aliquam tristique, odio quis mollis porttitor, ante ipsum fermentum magna, quis aliquam nibh quam non velit. Aenean finibus dui lectus, eu vulputate ex porta a.
       </p>
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet nisl diam. Praesent malesuada turpis venenatis, suscipit nibh non, molestie dolor. Pellentesque sit amet sem eu magna pretium tristique. Donec fermentum, felis ut bibendum congue, massa lacus tristique urna, id maximus ex lectus et sem. Nullam id scelerisque purus, elementum ultricies lorem. Aliquam tristique, odio quis mollis porttitor, ante ipsum fermentum magna, quis aliquam nibh quam non velit. Aenean finibus dui lectus, eu vulputate ex porta a.
       </p>
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet nisl diam. Praesent malesuada turpis venenatis, suscipit nibh non, molestie dolor. Pellentesque sit amet sem eu magna pretium tristique. Donec fermentum, felis ut bibendum congue, massa lacus tristique urna, id maximus ex lectus et sem. Nullam id scelerisque purus, elementum ultricies lorem. Aliquam tristique, odio quis mollis porttitor, ante ipsum fermentum magna, quis aliquam nibh quam non velit. Aenean finibus dui lectus, eu vulputate ex porta a.
       </p>
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet nisl diam. Praesent malesuada turpis venenatis, suscipit nibh non, molestie dolor. Pellentesque sit amet sem eu magna pretium tristique. Donec fermentum, felis ut bibendum congue, massa lacus tristique urna, id maximus ex lectus et sem. Nullam id scelerisque purus, elementum ultricies lorem. Aliquam tristique, odio quis mollis porttitor, ante ipsum fermentum magna, quis aliquam nibh quam non velit. Aenean finibus dui lectus, eu vulputate ex porta a.
       </p>
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet nisl diam. Praesent malesuada turpis venenatis, suscipit nibh non, molestie dolor. Pellentesque sit amet sem eu magna pretium tristique. Donec fermentum, felis ut bibendum congue, massa lacus tristique urna, id maximus ex lectus et sem. Nullam id scelerisque purus, elementum ultricies lorem. Aliquam tristique, odio quis mollis porttitor, ante ipsum fermentum magna, quis aliquam nibh quam non velit. Aenean finibus dui lectus, eu vulputate ex porta a.
       </p>
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet nisl diam. Praesent malesuada turpis venenatis, suscipit nibh non, molestie dolor. Pellentesque sit amet sem eu magna pretium tristique. Donec fermentum, felis ut bibendum congue, massa lacus tristique urna, id maximus ex lectus et sem. Nullam id scelerisque purus, elementum ultricies lorem. Aliquam tristique, odio quis mollis porttitor, ante ipsum fermentum magna, quis aliquam nibh quam non velit. Aenean finibus dui lectus, eu vulputate ex porta a.
       </p>
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet nisl diam. Praesent malesuada turpis venenatis, suscipit nibh non, molestie dolor. Pellentesque sit amet sem eu magna pretium tristique. Donec fermentum, felis ut bibendum congue, massa lacus tristique urna, id maximus ex lectus et sem. Nullam id scelerisque purus, elementum ultricies lorem. Aliquam tristique, odio quis mollis porttitor, ante ipsum fermentum magna, quis aliquam nibh quam non velit. Aenean finibus dui lectus, eu vulputate ex porta a.
       </p>

       
    </div>
    );
}

export default ModalPage;