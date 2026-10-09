document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll('.filters_menu li');
    const menuItems = document.querySelectorAll('.grid .col-sm-6'); 

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            
            filterButtons.forEach(btn => btn.classList.remove('active'));

            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            menuItems.forEach(item => {
                if (filterValue === '*') {
                    item.classList.remove('hide');
                } else {
                    const classToMatch = filterValue.substring(1); 
                    if (item.classList.contains(classToMatch)) {
                        item.classList.remove('hide');
                    } else {
                        item.classList.add('hide');
                    }
                }
            });
        });
    });
});