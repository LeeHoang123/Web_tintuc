    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("backToTopBtn").style.display
                = "block";
        } else {
            document.getElementById("backToTopBtn").style.display = "none";

        }
    }

    // Khi nút được click, cuộn lên đầu trang
    document.getElementById('backToTopBtn').addEventListener('click', function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop
            = 0; // For Chrome, Firefox, IE and Opera   

    });
