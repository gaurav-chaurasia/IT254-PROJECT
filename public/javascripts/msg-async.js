let response, element = '';

async function load_middle_client() {
    const user_id  = this.children[1].id;
    const user_img = this.children[0].src;
    const username = this.children[1].children[0].innerText;

    // update name in middle header
    middleHeader[1].id = user_id;
    middleHeader[0].src = user_img;
    middleHeader[1].innerText = username;
    
    // add spinner to middle main and fetch msg;
    middleMain.innerHTML = SPINNER;
    
    fetch(`/msg/chat/${user_id}`)
        .then(response => response.json())
        // getting data by making async call to /msg/chat/uid
        // then parsing that data to json()
        .then((response) => {
            // console.log(response);
            // successfully recived json responses 
            if (response.length == 0) 
            {
                middleMain.innerHTML = INFO('No Messages available');
            } 
            else 
            {
                for (let i = 0; i < response.length; i++) 
                {
                    if (response[i].sender_id == current_user_id) 
                    {
                        element += `<div class="msg-recived">${response[i].msg}</div>`;
                    } 
                    else 
                    {
                        element += `<div class="msg-sent">${response[i].msg}</div>`;
                    }
                }
                middleMain.innerHTML = `<div>${element}</div>`;
            }
        })
        .catch((err) => {
            middleMain.innerHTML = INFO('Previous data could not be loaded!!!');
        });
}
$(document).on('click', '.users', load_middle_client);