// const users = document.querySelectorAll('.users');
const middleHeader = $('.middle-header-container').children();
const middleMain   = $('.middle-msg-container').children()[0];
const middleFooter = $('.middle-bottom-container');
const current_user_id = $('.current_user').children()[1].id;

let response;
const SPINNER = `
        <div class="spinner">
            <div class="d-flex justify-content-center">
                <div class="spinner-border text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>`;
const INFO = (txt) => {   
    return `<div class="spinner">
                <div class="d-flex justify-content-center">
                    <div class="alert alert-dark" role="alert">
                        ${txt} <a href="/" class="alert-link"> HOME</a>
                    </div>    
                </div>
            </div>`;}

const get_data = async (url = '') => {
  try {
    response = await fetch(url);
    return response.json();
  } catch (err) {
    return err;
  }
};


async function loadMiddleClient() {
  const user_id  = this.children[1].id;
  const user_img = this.children[0].src;
  const username = this.children[1].children[0].innerText;

    // update name in middle header
    middleHeader[1].id = user_id;
    middleHeader[0].src = user_img;
    middleHeader[1].innerText = username;
    
    // add spinner to middle main and fetch msg;
    middleMain.innerHTML = SPINNER;
    // get_data(`/msg/chat?u_id=${user_id}`)
    //   .then((response) => {
    //     let el = '';
    //     console.log(response);
    //     if (response.length == 0) {
    //         middleMain.innerHTML = INFO('No Messages available');
    //     } else {
    //         for (let i = 0; i < response.length; i++) {
    //             let item = response[i];
    //             if (item.sender_id == current_user_id) {
    //                 el += `<div class="msg-sent">${item.msg}</div>`;
    //             } else {
    //                 el += `<div class="msg-recived">${item.msg}</div>`;
    //             }
    //         }
    //         middleMain.innerHTML = `<div>${el}</div>`;
    //     }
    //   })
    //   .catch((err) => {
    //     middleMain.innerHTML = INFO('Previous data could not be loaded!!!');
    //   });
    try {
        let url = new URL('http://localhost:3000/msg/chat');
        let params = { u_id: user_id };
        url.search = new URLSearchParams(params).toString();
        response = await fetch(url);

        let el = '';
        // console.log(response.json());
        for (let i = 0; response.length; i++) {
          console.log('h');
        }
        // console.log(response);

        if (response.length == 0) {
            middleMain.innerHTML = INFO('No Messages available');
        } else {
            for (let i = 0; i < response.length; i++) {
                let item = response[i];
                if(item.sender_id == current_user_id) {
                    el += `<div class="msg-sent">${item.msg}</div>`;
                } else {
                    el += `<div class="msg-recived">${item.msg}</div>`;
                }
            }
            middleMain.innerHTML = `<div>${el}</div>`;
        }
    } catch (err) {
        middleMain.innerHTML = INFO('data could not be loaded!!!');
    }
}
$(document).on('click', '.users', loadMiddleClient);