let profile = document.querySelector(".profile");
let Profile = document.querySelector(".Profile");

new DataTable('#profile-example', {
    paging: false,
    scrollCollapse: true,
    scrollY: '200px'
});

    $(document).ready(function () {
        $('#example').DataTable();
        $('select').on('change', function () {
            var selectedValue = $(this).val();
            var colorClass = '';

            switch (selectedValue) {
                case '1':
                    colorClass = 'registered';
                    break;
                case '2':
                    colorClass = 'not-registered';
                    break;
                default:
                    colorClass = ''; // Default color if none matches
                    break;
            }

            $(this).closest('tr').find('.colorTextBox').removeClass().addClass('colorTextBox ' + colorClass);
        });

        // Initial call to set the initial color
        $('select').trigger('change');
    });

