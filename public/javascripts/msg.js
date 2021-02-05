const online_user_container = $('.online-user-container');

const USER_ELEMENT = (user) => {
  return `
      <div class="users">
          <img 
              class="user-img img-fluid" 
              src="${user.profile_pic_url}" 
              alt="profile"
          >
  
          <div class="user-details" id="${user._id}">
              <div class="user-name">
                  ${user.username}
              </div>
              <div class="user-msg-last">
                  this is last msg..
              </div>
              <span class="online-dot"></span>
          </div>
      </div>`};
var socket;

// client-side
if (window.location.pathname === '/msg') {
  socket = io('http://localhost:3000');

  /**
   * @listing from server
   * when new user joins
   * @gets {data}
   *  */
  socket.on('user_connect', (user) => {
    // console.log(online_user_container[0].innerHTML);
    online_user_container[0].innerHTML += USER_ELEMENT(user);
    console.log(online_user_container.innerHTML);
  });

  /**
   * @listing from server
   * when user disconnects
   * @gets {user_id}
   *  */
  socket.on('user_disconnect', (user_id) => {
    // update views
    $(`#${user_id}`).parent().remove();
  });
}
