var socket;

// client-side
if (window.location.pathname === '/msg') {
  // socket = io('http://localhost:3000/');
  socket = io('https://dlhd.herokuapp.com');

  /**
   * @listing from server
   * when new user joins
   * @gets {data}
   *  */
  socket.on('user_connect', async (user) => {
    // update view
    
    // saving user data locally in session storage
    // so as soon as the window is closed 
    // it automatically destroy the data
    set_data_local('current_user', user);
    
    var user_view = $(`.online_user_container .${user._id}`).html(); 
    if (!user_view) {
      online_user_container[0].innerHTML += USER_ELEMENT(user);
    }
  });


  /**
   * @sending to server
   * new messages
   * need to send user_id whom you wanna send msg
   */
  $('.msg-send-botton').click(() => {
    const MSG = $('.msg-input').val();
    const TO_USER = middleHeader[1].id;
    const TO_USERNAME = middleHeader[1].innerHTML;

    middleMain.innerHTML += RECIVED_MSG(MSG_LOADER);

    socket.emit('SENT_MSG', TO_USER, TO_USERNAME, MSG, (success, newMSGObj) => {
      if (success) {
        console.log(newMSGObj);
        middleMain.lastChild.remove();
        middleMain.innerHTML += RECIVED_MSG(MSG, newMSGObj.createdAt);
      } else {
        middleMain.lastChild.remove();
        middleMain.innerHTML += INFO('message could not be sent try again!!!');
      }
    });
  });



  /**
   * @listening from server
   * new messages
   * need to send user_id whom you wanna send msg
   */
  socket.on('DELIVER_MSG', (MSG, username) => {
    console.log(MSG);
    middleMain.innerHTML += SENT_MSG(MSG.msg, MSG.createdAt, username);
  });



  /**
   * @listing from server
   * when user disconnects
   * @gets {user_id}
   *  */
  socket.on('user_disconnect', (user_id) => {
    // update views
    $(`.online-user-container .${user_id}`).remove();
  });
}
