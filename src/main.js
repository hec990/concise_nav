const button = document.querySelector('.button')

$(button).on('click', (e) => {
	const $inputValue = $('input').val()
	if ($inputValue === '') {
		e.preventDefault()
		alert("请在输入框输入信息！");
	}
})