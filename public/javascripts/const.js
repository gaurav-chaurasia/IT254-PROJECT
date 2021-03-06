// const users = document.querySelectorAll('.users');
const middleHeader = $('.middle-header-container').children();
const middleMain = $('.middle-msg-container').children()[0];
const middleFooter = $('.middle-bottom-container');
const current_user_id = $('.current_user').attr('id');

const online_user_container = $('.online-user-container');

const SPINNER = `
    <div class="spinner">
        <div class="d-flex justify-content-center">
            <div class="spinner-border text-success" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>`;

const INFO = (txt) => {
  return `
        <div class="spinner">
            <div class="d-flex justify-content-center">
                <div class="alert alert-dark" role="alert">
                    ${txt} <a href="/" class="alert-link"> HOME</a>
                </div>    
            </div>
        </div>`;
    };

const MSG_LOADER = `
    <div class="d-flex justify-content-center">
      <div class="spinner-grow" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>`;

const SENT_MSG = (txt, time, username) => {
  return `
    <div class="msg-sent">
      <div class="msg-user-details">
        ${username}
      </div>

      ${txt}

      <div class="msg-msg-details">
          ${time}
      </div>  
    </div>`;
};

const RECIVED_MSG = (txt, time = 'January 1, 0001 00:00:00') => {
  return `
    <div class="msg-recived">
      <div class="msg-user-details">
        You
      </div>
      ${txt}
      <div class="msg-msg-details">
        ${time}
      </div>
    </div>`;
};

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
          ${user.firstname} ${user.lastname}
        </div>
        <div class="user-msg-last">
          this is last msg..
        </div>
        <span class="online-dot"></span>
      </div>
    </div>`;
};


const formate_datetime = (datetime) => {
  const YEARS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  var date = datetime.split('T')[0];
  var time = datetime.split('T')[1];
  var years  = date.split('-')[0];
  var months = Number(date.split('-')[1]);
  var day    = date.split('-')[2];
  var hours   = time.split(':')[0];
  var minutes = time.split(':')[1];
  var seconds = time.split(':')[2];

  return `${day} ${YEARS[months]},  ${hours}:${minutes}`;
};