function handsubmit(){
    //lấy giá trị của input email và chuyển sang in thường

    const emailValue = document.getElementById('email').value.toLocaleLowerCase();
    
    // kiểm tra từng phần từ trong check email
    const errorEmail= document.getElementById('error-email');

    //lâý element của thẻ p hiển thị lỗi
    //điều kiện là 1 email
    const checkemail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  /**kiểm tra từng phần tử trong email và đúng cấu trúc
   */

  //dùng match để check với email vừa nhận
  //match truy xuất kết quả của chuỗi này với biểu thức
  const check= emailValue.match(checkemail);

  //lấy phần chứa thông tin user 
  const sectioncontent= document.querySelector('#info .section-content');
  console.log('check section', sectioncontent);
  
  //lấy element để kiểm tra submit
  const submitcontrol= document.querySelector('.submit-email');
  if(check){
    sectioncontent.style.display = 'block';
    submitcontrol.style.display ='none';
    errorEmail.innerHTML= ''

  }else{
    errorEmail.innerHTML= 'Vui lòng nhập email đúng định dạng '
  }
} 

function handleonMouseOver(element){
const viewmore = element.querySelector('.control-view');
viewmore.style.display = 'inline-block';
/**khi trỏ chuọt vào thì trong class thông tin nghề nghiệp thì hiển thị button viewmore
 * khi ra khỏi class thì view more sẽ display none
 */
}
function handleOnMouseOut(element){
  const viewmore = element.querySelector('.control-view');
  if(!viewmore.classList.value.includes('less-more')){//nếu view-more có class là less-more thì sẽ không none
    viewmore.style.display='none';
  }
}
function handleViewMore(element){
  const parentElement = element.closest('.parent');
  const viewmore = parentElement.querySelector('.control-view');
  const sectioncontent = parentElement.querySelectorAll('.section-content');
  /**nếu click vào button viewmore thì sẽ hiển thị thông tin trong sectioncontent
   * và xóa viewmore và add lessmore, button viewmore sẽ đổi thành less more 
   * hoặc ngược lại
   */
  if(viewmore.classList.value.includes('view-more')){
  
    sectioncontent.forEach((element) =>{
      element.style.display ='block';
    });
    viewmore.classList.remove('view-more');
    viewmore.classList.add('less-more');
    viewmore.innerHTML = 'Less more';
  }else{
    sectioncontent.forEach((element) =>{
      element.style.display ='none';
    });
    viewmore.classList.remove('less-more');
    viewmore.classList.add('view-more');
    viewmore.innerHTML = 'View more';
  }
}