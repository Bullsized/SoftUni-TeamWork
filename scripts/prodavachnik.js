function startApp() {
	showHideMenuLinks();
<<<<<<< HEAD
    showHomeView();


    // Bind the navigation menu links
    $("#linkHome").click(showHomeView);
    $("#linkLogin").click(showLoginView);
    $("#linkRegister").click(showRegisterView);
	$("#linkLogout").click(logoutUser);

=======
	showHomeView();
	
    // Bind the navigation menu links
    $("#linkHome").click(showHomeView);
    $("#linkLogin").click(showLoginView);
    $("#linkRegister").click(showRegisterView);
    $("#linkLogout").click(logoutUser);

>>>>>>> fcae5de1f12adfb35312ed4a0664bcdb4ec06cf8
    // Bind the form submit buttons
    $("#buttonLoginUser").click(loginUser);
    $("#buttonRegisterUser").click(registerUser);

<<<<<<< HEAD

=======
>>>>>>> fcae5de1f12adfb35312ed4a0664bcdb4ec06cf8
    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewName).show();
    }
<<<<<<< HEAD
	
    function showHideMenuLinks() {
=======

	    function showHideMenuLinks() {
>>>>>>> fcae5de1f12adfb35312ed4a0664bcdb4ec06cf8
        $("#linkHome").show();
        if (sessionStorage.getItem('authToken') === null) {
            // No logged in user
            $("#linkLogin").show();
            $("#linkRegister").show();
            $("#linkLogout").hide();
        } else {
            // We have logged in user
            $("#linkLogin").hide();
            $("#linkRegister").hide();
            $("#linkLogout").show();
        }
    }
	
<<<<<<< HEAD

=======
>>>>>>> fcae5de1f12adfb35312ed4a0664bcdb4ec06cf8
    function showHomeView() {
        showView('viewHome');
    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }

    function showRegisterView() {
        $('#formRegister').trigger('reset');
        showView('viewRegister');
    }
<<<<<<< HEAD
	
    // user/login
=======

	    // user/login
>>>>>>> fcae5de1f12adfb35312ed4a0664bcdb4ec06cf8
    function loginUser() {
        const kinveyLoginUrl = "https://mock.backend.com/user/kid_rk/login";
        const kinveyAuthHeaders = {
            'Authorization': "Basic " + btoa("kid_rk:736804a668"),
        };
        let userData = {
            username: $('#formLogin input[name=username]').val(),
            password: $('#formLogin input[name=passwd]').val()
        };

        $.ajax({
            method: "POST",
            url: kinveyLoginUrl,
            headers: kinveyAuthHeaders,
            data: userData,
            success: loginSuccess
        });

        function loginSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            showHomeView();
        }
    }

    function saveAuthInSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authToken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
    }

    // user/register
    function registerUser() {
        const kinveyRegisterUrl = "https://mock.backend.com/user/kid_rk/";
        const kinveyAuthHeaders = {
            'Authorization': "Basic " + btoa("kid_rk:736804a668"),
        };

        let userData = {
            username: $('#formRegister input[name=username]').val(),
            password: $('#formRegister input[name=passwd]').val()
        };

        $.ajax({
            method: "POST",
            url: kinveyRegisterUrl,
            headers: kinveyAuthHeaders,
            data: userData,
            success: registerSuccess
        });

        function registerSuccess(userInfo) {
            console.log(userInfo);
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            showHomeView();
        }
    }

    // user/logout
    function logoutUser() {
        sessionStorage.clear();
        $('#loggedInUser').text("");
        showHideMenuLinks();
        showHomeView();
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> fcae5de1f12adfb35312ed4a0664bcdb4ec06cf8
