'use strict';

/*--------------------------------

 File Name: Bsquared.js
 Date: 2016 28 2016
 Author: Aaron Young
 Modified By:
 Modified Date:
 Notes:
 -----------------------------------*/

// Global Namespace.
var BSQUARED = BSQUARED || {};

/**
 * 
 * @type {{init}}
 */
BSQUARED.Main = function () {

    var year = new Date().getFullYear();

    return {

        // A public function utilizing privates
        init: function init() {
            var footerYear = $('#footerYear').html('2014-' + year);
        }
    };
}();

$(document).ready(function () {
    BSQUARED.Main.init();
    BSQUARED.Portfolio.init();
    BSQUARED.Profile.init();
    BSQUARED.Statement.init();
    BSQUARED.About.init();
    BSQUARED.Skills.init();
    BSQUARED.Works.init();
    BSQUARED.UserControls.init();
});

/*--------------------------------

 File Name: Portfolio.js
 Date: 2016 28 2016
 Author: Aaron Young
 Modified By:
 Modified Date:
 Notes:
 -----------------------------------*/

/**
 * 
 * @type {{init}}
 */
BSQUARED.Portfolio = function () {

    return {
        init: function init() {
            $('.carousel').carousel('pause');

            $('#btnSendMemberMail').on('click', function (event) {
                event.preventDefault();
                BSQUARED.Notifications.success_MemberMail_Notification();
            });

            var defaultImageCheck = $('.imageResource');

            defaultImageCheck.each(function () {
                if ($(this).attr('src') === "") {
                    $(this).attr('src', 'images/member_uploads/about/default_profile.png');
                }
            });
        }
    };
}();

/*--------------------------------

 File Name: Bsquared.js

 Date:
 Modified:
 Notes:
 -----------------------------------*/

/**
 * 
 * @type {{init}}
 */
BSQUARED.LoginForms = function () {

    var email = $('.email');
    var password = $('.password');
    var userIcon = $('.user-icon');
    var passIcon = $('.pass-icon');

    /**
     * 
     */
    return {
        init: function init() {
            email.focus(function () {
                userIcon.css('left', '-48px');
            }).blur(function () {
                userIcon.css('left', '0px');
            });

            password.focus(function () {
                passIcon.css('left', '-48px');
            }).blur(function () {
                passIcon.css('left', '0px');
            });
        }
    };
}();
/*--------------------------------

 File Name: Skills.js
 Date: 2016 28 2016
 Author: Aaron Young
 Modified By:
 Modified Date:
 Notes:
 -----------------------------------*/

/**
 * 
 * @type {{init}}
 */
BSQUARED.Skills = function () {

    var form = 'skills';

    var labelURL = '/label';
    var columnURL = '/column';
    var imageURL = '/path';
    var resumeURL = '/resume';

    var destination_id;

    var label = $('#txtSkillLabel');
    var column = $('#txtAreaSkillsColumn');

    /**
     *
     * @type {{labelDestinationID: number, columnDestinationID: number, imageDestinationID: number, resumeDestinationID: number}}
     */
    var destinations = {
        labelDestinationID: 1,
        columnDestinationID: 4,
        imageDestinationID: 1,
        resumeDestinationID: 35
    };

    /**
     *
     * @param optionValue
     */
    var setDestinations = function setDestinations(optionValue) {
        destinations.labelDestinationID = BSQUARED.Destinations.searchLists(form, optionValue, 'labelDestination');
        destinations.columnDestinationID = BSQUARED.Destinations.searchLists(form, optionValue, 'columnDestination');
        destinations.imageDestinationID = BSQUARED.Destinations.searchLists(form, optionValue, 'image');
        destinations.resumeDestinationID = BSQUARED.Destinations.searchListKeyValue('resume', 'destination_id');

        $('#skillLabelDestinationID').val(destinations.labelDestinationID);
        $('#skillColumnDestinationID').val(destinations.columnDestinationID);
        $('#fileSkillsDestinationID').val(destinations.imageDestinationID);
        $('#fileResumeDestinationID').val(destinations.resumeDestinationID);

        BSQUARED.Forms.loadValues(labelURL, destinations.labelDestinationID, 'label', label);
        BSQUARED.Forms.loadValues(columnURL, destinations.columnDestinationID, 'column', column);
    };

    /**
     * 
     * @param destination_id
     */
    var getDestinations = function getDestinations(destination_id) {
        var fileSkillsImage = $('#fileSkillsIcon');

        var userIDStart = fileSkillsImage.attr('name').lastIndexOf('_');
        var userID = fileSkillsImage.attr('name').substr(userIDStart + 1);
        switch (destination_id) {
            case '1':
                setDestinations(1);
                fileSkillsImage.attr('name', 'member_skill_image_1_user_' + userID);
                break;
            case '2':
                setDestinations(2);
                fileSkillsImage.attr('name', 'member_skill_image_2_user_' + userID);
                break;
            case '3':
                setDestinations(3);
                fileSkillsImage.attr('name', 'member_skill_image_3_user_' + userID);
                break;
            default:
                setDestinations(1);
                fileSkillsImage.attr('name', 'member_skill_image_1_user_' + userID);
        }
    };

    return {

        init: function init() {
            var firstFieldFocus = $('#txtSkillLabel');
            var fileImageInput = $('#fileSkillsIcon');
            var fileResumeInput = $('#fileResume');

            var formSelectDestination = $('#skills_DestinationID');
            var btnSaveSkill = $('#btnSubmitSkill_Column_Label_Image');

            var labelDestinationID = $('#skillLabelDestinationID');
            var columnDestinationID = $('#skillColumnDestinationID');
            var imageDestinationID = $('#fileSkillsDestinationID');
            var resumeDestinationID = $('#fileResumeDestinationID');

            firstFieldFocus.focus();
            fileImageInput.hide();
            fileResumeInput.hide();

            labelDestinationID.val(1);
            columnDestinationID.val(4);
            imageDestinationID.val(1);
            resumeDestinationID.val(35);

            BSQUARED.Forms.loadValues(labelURL, labelDestinationID.val(), 'label', label);
            BSQUARED.Forms.loadValues(columnURL, columnDestinationID.val(), 'column', column);

            formSelectDestination.on('change', function () {
                destination_id = $('#skills_DestinationID').find('option:selected').val();
                getDestinations(destination_id);
            });

            btnSaveSkill.on('click', function (event) {
                event.preventDefault();

                var $postLabel = {};
                var $postColumn = {};

                $('#userSkillsPhotoForm').submit();
                $('#userResumeForm').submit();

                $postLabel.label = $('#txtSkillLabel').val();
                $postLabel.labelDestinationID = labelDestinationID.val();
                $postColumn.column = $('#txtAreaSkillsColumn').val();
                $postColumn.columnDestinationID = columnDestinationID.val();

                BSQUARED.Forms.post("POST", labelURL, $postLabel);
                BSQUARED.Forms.post('POST', columnURL, $postColumn);
            });

            $('#userSkillsPhotoForm').submit(function (event) {
                event.preventDefault();

                var data = new FormData($('#userSkillsPhotoForm')[0]);
                data.append('destinationID', $('#fileSkillsDestinationID').val());
                data.append('photoValue', $('#skills_DestinationID option:selected').val());

                BSQUARED.Forms.postFiles("POST", imageURL, data);
            });

            $('#userResumeForm').submit(function (event) {
                event.preventDefault();
                var data = new FormData($('#userResumeForm')[0]);
                data.append('destinationID', $('#fileResumeDestinationID').val());

                BSQUARED.Forms.postFiles('POST', imageURL, data);
            });

            $('#btnAddResume').on('click', function (event) {
                event.preventDefault();
                $('#fileResume').click();
            });

            $('#btnAddSkillsImage').on('click', function (event) {
                event.preventDefault();
                $('#fileSkillsIcon').click();
            });
        }
    };
}();

/*--------------------------------

 File Name: Bsquared.js

 Date:
 Modified:
 Notes:
 -----------------------------------*/
/**
 * 
 * @type {{init}}
 */
BSQUARED.UserControls = function () {

    var defaultWorksTitle = '';
    var defaultWorksDescription = '';

    var username;

    /**
     *
     * @param event
     */
    var worksHoverEnterHandle = function worksHoverEnterHandle(event) {
        var worksImageSelected = '#' + event.target.id;
        var url = '/works/' + username + '/' + $(worksImageSelected).attr('alt');
        console.log(url);
        $.ajax({
            method: 'GET',
            url: url,
            cache: false,
            success: function success(data) {
                if (data.works !== null && data.works.hasOwnProperty('title')) {
                    $('#worksTitle').html(data.works.title);
                } else {
                    $('#worksTitle').html('Coming Soon!');
                }
                if (data.works !== null && data.works.hasOwnProperty('project_description')) {
                    var description = truncateDescription(data.works.project_description);
                    $('#descriptionWorks').html(data.works.project_description);
                } else {
                    $('#descriptionWorks').html('Hover over a project to gather a brief description, or click thee image to see the specs!');
                }
            },
            error: function error(data) {
                console.log(data);
            }
        });
    };

    /**
     *
     * @param event
     */
    var worksHoverLeaveHandle = function worksHoverLeaveHandle(event) {
        $('#worksTitle').html('Select a Project').fadeIn("fast");
        $('#descriptionWorks').html('Hover over a project to gather a brief description, or click thee image to see the specs!').fadeIn("fast");
    };

    var truncateDescription = function truncateDescription(description) {
        if (description.length > 25) {
            description = description.substr(0, description.indexOf(' '));
        }
        description = description + '...';
        return description;
    };

    return {

        init: function init() {

            var currentURL = window.location.pathname;
            var userIndex = currentURL.lastIndexOf('/');
            currentURL = currentURL.substr(userIndex + 1, currentURL.length);
            username = currentURL;

            var worksImageHover = $('.worksImageHover');
            worksImageHover.on('mouseenter', function (event) {
                worksHoverEnterHandle(event);
            });

            worksImageHover.on('mouseleave', function (event) {
                worksHoverLeaveHandle(event);
            });
        }
    };
}();
/*--------------------------------

 File Name: Profile.js
 Date: 2016 28 2016
 Author: Aaron Young
 Modified By:
 Modified Date:
 Notes:
 -----------------------------------*/

/**
 * 
 * @type {{init}}
 */
BSQUARED.Profile = function () {

    var url = window.location.pathname;
    var imageURL = '/path';
    var $post = {};

    return {
        init: function init() {

            $('#txtFirstName').focus();
            //('#fileProfilePhoto').hide();
            $('#fileProfilePhotoDestinationID').val(36);

            $('#userProfileForm').submit(function (event) {
                event.preventDefault();

                $('#userProfilePhotoForm').submit();

                $post.firstName = $('#txtFirstName').val();
                $post.lastName = $('#txtLastName').val();
                $post.aboutMe = $('#txtAreaAboutMe').val();
                BSQUARED.Forms.post('POST', url, $post);
            });

            $('#btnAddProfilePhoto').on('click', function (event) {
                event.preventDefault();
                $('#fileProfilePhoto').click();
            });

            $('#userProfilePhotoForm').submit(function (event) {
                event.preventDefault();
                var data = new FormData($('#userProfilePhotoForm')[0]);
                data.append('destinationID', $('#fileProfilePhotoDestinationID').val());
                BSQUARED.Forms.postFiles("POST", imageURL, data);
            });
        }
    };
}();

/*--------------------------------

 File Name: Forms.js
 Date: 2016 28 2016
 Author: Aaron Young
 Modified By:
 Modified Date:
 Notes:
 -----------------------------------*/

/**
 * 
 * @type {{post}}
 */
BSQUARED.Forms = function () {

    /**
     * PRIVATE VARIABLE & METHODS
     */
    var sendPortfolioSuccess = function sendPortfolioSuccess() {
        BSQUARED.Notifications.sendSuccessNotification();
    };
    var sendPortfolioError = function sendPortfolioError() {
        BSQUARED.Notifications.sendErrorNotification();
    };
    var sendLoadError = function sendLoadError() {
        BSQUARED.Notifications.error_Loading_Notification();
    };

    /**
     * 
     * @param data
     * @param elements
     */
    var worksLoad = function worksLoad(data, elements) {
        var x = 0;
        for (x; x < elements.length; x++) {
            switch (x) {
                case 0:
                    if (data.works !== null) {
                        $(elements[x].selector).val(data.works.title);
                    }
                    break;
                case 1:
                    if (data.works !== null) {
                        $(elements[x].selector).val(data.works.project_description);
                    }
                    break;
                case 3:
                    if (data.works !== null) {
                        $(elements[x].selector).val(data.works.work_link);
                    }
                    break;
                default:
                    $(elements[x].selector).val('');
            }
        }
    };

    /**
     * 
     * @param data
     * @param elements
     */
    var pathLoad = function pathLoad(data, elements) {
        var x = 0;
        for (x; x < elements.length; x++) {}
    };

    /**
     * 
     * @param data
     * @param element
     */
    var labelLoad = function labelLoad(data, element) {
        $(element.selector).val(data.label.label);
    };

    /**
     * 
     * @param data
     * @param element
     */
    var columnLoad = function columnLoad(data, element) {
        //noinspection JSUnresolvedVariable
        $(element.selector).val(data.column.column_text);
    };

    /**
     * 
     * @param url
     * @param destination_id
     * @returns {string}
     */
    var makeRESTURL = function makeRESTURL(url, destination_id) {

        return url + '/' + destination_id;
    };

    /**
     * PUBLIC METHODS
     */
    return {

        /**
         * 
         * @param type
         * @param url
         * @param data
         */
        post: function post(type, url, data) {
            $.ajaxSetup({
                headers: { 'X-CSRF-TOKEN': $('input[name="_token"]').val() }
            });

            $.ajax({

                method: type,
                url: url,
                data: data,
                datatype: "json",
                cache: false,
                success: function success(data) {
                    console.log(data);
                    sendPortfolioSuccess();
                },
                error: function error(data) {
                    console.log(data);
                    sendPortfolioError();
                }

            }).done(function (data) {});
        },

        /**
         * 
         * @param type
         * @param url
         * @param data
         */
        postFiles: function postFiles(type, url, data) {
            $.ajaxSetup({
                headers: { 'X-CSRF-TOKEN': $('input[name="_token"]').val() }
            });
            $.ajax({

                method: type,
                url: url,
                data: data,
                datatype: "json",
                cache: false,
                processData: false,
                contentType: false,
                success: function success(data) {
                    console.log(data);
                    sendPortfolioSuccess();
                },
                error: function error(data) {
                    console.log(data);
                    sendPortfolioError();
                }
            }).done(function (data) {});
        },

        /**
         * 
         * @param event
         * @param data
         */
        uploadFiles: function uploadFiles(event, data) {},

        /**
         *
         * @param url
         * @param destination_id
         * @param type
         * @param elements
         */
        loadValues: function loadValues(url, destination_id, type, elements) {
            var route;
            if (type === 'works') {
                route = url;
            } else {
                route = makeRESTURL(url, destination_id);
            }
            $.ajaxSetup({
                headers: { 'X-CSRF-TOKEN': $('input[name="_token"]').val() }
            });

            $.ajax({
                method: "GET",
                url: route,
                datatype: "json",
                cache: false,
                success: function success(data) {
                    switch (type) {
                        case "works":
                            console.log(route);
                            worksLoad(data, elements);
                            break;
                        case "label":
                            labelLoad(data, elements);
                            break;
                        case "column":
                            columnLoad(data, elements);
                            break;
                    }
                },
                error: function error(data) {
                    sendLoadError(data);
                }
            }).done(function (data) {});
        }
    };
}();

/*--------------------------------

 File Name: Notification.js
 Date: 2016 28 2016
 Author: Aaron Young
 Modified By:
 Modified Date:
 Notes: Used to create and return notification's to the users based on control/form uploads.
 -----------------------------------*/

BSQUARED.Notifications = function () {

    /**
        PRIVATE VARIABLES & METHODS
     */

    var properties = {};

    var notification;
    var successNotification_Portfolio;
    var errorNotification_Portfolio;
    var successNotification_Mail;
    var errorNotification_Mail;
    var errorLoadNotification;

    var errorMessage = 'Seems to have been an error, want to report a bug? <a href="#">E-mail Support Team</a>';
    var loadWarning = 'Seems some of your data did not load properly, want to report a bug?<a href="#">E-mail Support Team</a>';

    /**
     * 
     * @param properties
     */
    notification = function notification(properties) {

        $('.result').html('<div class="alert ' + properties.type + '">' + '<button type="button" class="close">x</button>' + properties.message + '</div>');

        window.setTimeout(function () {
            $('.' + properties.type).fadeTo(500, 0).slideUp(500, function () {
                $(this).remove();
            });
        }, 5000);

        $('.' + properties.type + '.close').on('click', function (e) {
            $(this).parent().fadeTo(500, 0).slideUp(500);
        });
    };

    successNotification_Portfolio = function successNotification_Portfolio() {
        properties.type = 'alert-success';
        properties.message = 'Portfolio Updated!';

        notification(properties);
    };

    errorNotification_Portfolio = function errorNotification_Portfolio() {
        properties.type = 'alert-danger';
        properties.message = errorMessage;

        notification(properties);
    };

    successNotification_Mail = function successNotification_Mail() {
        properties.type = 'alert-success';
        properties.message = 'Message Sent!';

        notification(properties);
    };

    errorNotification_Mail = function errorNotification_Mail() {
        properties.type = 'alert-danger';
        properties.message = errorMessage;

        notification(properties);
    };

    errorLoadNotification = function errorLoadNotification() {
        properties.type = 'alert-warning';
        properties.message = loadWarning;

        notification(properties);
    };

    /**
     * Public Methods
     */
    return {

        sendSuccessNotification: function sendSuccessNotification() {
            return successNotification_Portfolio();
        },

        sendErrorNotification: function sendErrorNotification() {
            return errorNotification_Portfolio();
        },

        success_MemberMail_Notification: function success_MemberMail_Notification() {
            return successNotification_Mail();
        },

        error_MemberMail_Notification: function error_MemberMail_Notification() {
            return errorNotification_Mail();
        },

        error_Loading_Notification: function error_Loading_Notification() {
            return errorLoadNotification();
        }
    };
}();
/*--------------------------------

 File Name: Statement.js
 Date: 2016 28 2016
 Author: Aaron Young
 Modified By:
 Modified Date:
 Notes:
 -----------------------------------*/

/**
 *
 * @type {{init}}
 */
BSQUARED.Statement = function () {

    var url = window.location.pathname;
    var pathURL = '/path';

    var $post = {};

    return {

        init: function init() {

            $('#fileBackgroundImage').hide();
            $('#txtStatement').focus();

            $('#fileProfilePhoto').on('change');

            $('#userStatementForm').submit(function (event) {
                event.preventDefault();
                $post.statement = $('#txtStatement').val();
                $post.token = $('input[name="_token"]').val();
                var checkedURL = BSQUARED.Utilities.checkPath(url);
                if (checkedURL === 'statement') {
                    BSQUARED.Forms.post('POST', url, $post);
                }
            });

            $('#userBackgroundImageForm').submit(function (event) {
                event.preventDefault();
                var data = new FormData($('#userBackgroundImageForm')[0]);
                data.append('destinationID', $('#fileBackgroundImageDestinationID').val());
                BSQUARED.Forms.postFiles('POST', pathURL, data);
            });

            $('#btnBackgroundImage').on('click', function (event) {
                event.preventDefault();
                $('#fileBackgroundImage').click();
            });
        }
    };
}();
/*--------------------------------

 File Name: Bsquared.js
 Date: 2016 28 2016
 Modified By:
 Modified Date:
 Notes:
 -----------------------------------*/

/**
 *
 * @type {{init}}
 */
BSQUARED.About = function () {

    /**
     * PRIVATE VARIABLES & METHODS
     * @type {string}
     */

    var overviewURL = window.location.pathname;

    var form = 'about';
    var labelURL = '/label';
    var columnURL = '/column';
    var imageURL = '/path';

    var destination_id;

    var column = $('#txtAreaAboutColumn');
    var label = $('#txtAboutLabel');

    /**
     * 
     * @type {{labelDestinationID: number, columnDestinationID: number, imageDestinationID: number}}
     */
    var destinations = {
        labelDestinationID: 22,
        columnDestinationID: 7,
        imageDestinationID: 22
    };

    /**
     *
     * @param optionValue
     */
    var setDestinations = function setDestinations(optionValue) {

        destinations.labelDestinationID = BSQUARED.Destinations.searchLists(form, optionValue, 'labelDestination');
        destinations.columnDestinationID = BSQUARED.Destinations.searchLists(form, optionValue, 'columnDestination');
        destinations.imageDestinationID = BSQUARED.Destinations.searchLists(form, optionValue, 'image');

        $('#aboutLabelDestinationID').val(destinations.labelDestinationID);
        $('#aboutColumnDestinationID').val(destinations.columnDestinationID);
        $('#fileAboutDestinationID').val(destinations.imageDestinationID);

        BSQUARED.Forms.loadValues(labelURL, destinations.labelDestinationID, 'label', label);
        BSQUARED.Forms.loadValues(columnURL, destinations.columnDestinationID, 'column', column);
    };

    /**
     * 
     * @param destination_id
     */
    var getDestinations = function getDestinations(destination_id) {
        var fileAboutImage = $('#fileAboutImage');

        var userIDStart = fileAboutImage.attr('name').lastIndexOf('_');
        var userID = fileAboutImage.attr('name').substr(userIDStart + 1);
        switch (destination_id) {
            case '1':
                setDestinations(1);
                fileAboutImage.attr('name', 'member_about_image_1_user_' + userID);
                break;
            case '2':
                setDestinations(2);
                fileAboutImage.attr('name', 'member_about_image_2_user_' + userID);
                break;
            case '3':
                setDestinations(3);
                fileAboutImage.attr('name', 'member_about_image_3_user_' + userID);
                break;
            default:
                setDestinations(1);
                fileAboutImage.attr('name', 'member_about_image_1_user_' + userID);
                break;
        }
    };

    return {

        init: function init() {

            var firstFieldFocus = $('#txtAbout_Overview');
            var fileInput = $('#fileAboutImage');
            var aboutLabelDestinationID = $('#aboutLabelDestinationID');
            var fileDestination = $('#fileAboutDestinationID');
            var aboutColumnDestinationID = $('#aboutColumnDestinationID');
            var formSelectDestination = $('#about_DestinationID');
            var btnSaveAbout = $('#btnSubmitAbout_Column_Label_Image');
            var btnSaveOverview = $('#btnSubmitAbout_Overview');
            var btnAboutImage = $('#btnAddAboutImage');

            fileInput.hide();
            firstFieldFocus.focus();
            aboutLabelDestinationID.val(22);
            aboutColumnDestinationID.val(7);
            fileDestination.val(22);

            BSQUARED.Forms.loadValues(labelURL, aboutLabelDestinationID.val(), 'label', label);
            BSQUARED.Forms.loadValues(columnURL, aboutColumnDestinationID.val(), 'column', column);

            formSelectDestination.on('change', function () {
                destination_id = $('#about_DestinationID').find('option:selected').val();
                getDestinations(destination_id);
            });

            btnSaveAbout.on('click', function (event) {
                event.preventDefault();

                var $postLabel = {};
                var $postColumn = {};

                $('#userAboutImageForm').submit();

                $postLabel.label = $('#txtAboutLabel').val();
                $postColumn.column = $('#txtAreaAboutColumn').val();
                $postLabel.labelDestinationID = $('#aboutLabelDestinationID').val();
                $postColumn.columnDestinationID = $('#aboutColumnDestinationID').val();

                BSQUARED.Forms.post("POST", labelURL, $postLabel);
                BSQUARED.Forms.post("POST", columnURL, $postColumn);
            });

            $('#userAboutImageForm').submit(function (event) {
                event.preventDefault();
                var data = new FormData($('#userAboutImageForm')[0]);
                data.append('destinationID', $('#fileAboutDestinationID').val());
                data.append('photoValue', $('#about_DestinationID option:selected').val());
                BSQUARED.Forms.postFiles("POST", imageURL, data);
            });

            btnAboutImage.on('click', function (event) {
                event.preventDefault();
                fileInput.click();
            });

            btnSaveOverview.on('click', function (event) {
                event.preventDefault();
                var $post = {};
                $post.overview = $('#txtAbout_Overview').val();
                BSQUARED.Forms.post("POST", overviewURL, $post);
            });
        }
    };
}();
/*--------------------------------

 File Name: Bsquared.js
 Date: 2016 28 2016
 Modified By:
 Modified Date:
 Notes:
 -----------------------------------*/

/**
 * 
 * @type {{init}}
 */
BSQUARED.Works = function () {

    var worksURL = window.location.pathname;
    var form = 'works';
    var pathURL = '/path';

    var destination_id;

    var title = $('#txtWorksTitle');
    var description = $('#txtAreaProjectDescription');
    var link = $('#txtProjectLink');

    /**
     *
     * @type {{previewDestinationID: number, thumbnailDestinationID: number, worksDestinationID: number}}
     */
    var destinations = {
        previewDestinationID: 25,
        thumbnailDestinationID: 10,
        worksDestinationID: 10
    };

    /**
     *
     * @param optionValue
     */
    var setDestinations = function setDestinations(optionValue) {
        var worksDestinationID = $('#worksDestinationID');

        destinations.worksDestinationID = BSQUARED.Destinations.searchLists(form, optionValue, 'general');
        destinations.thumbnailDestinationID = BSQUARED.Destinations.searchLists(form, optionValue, 'thumbDestination');
        destinations.previewDestinationID = BSQUARED.Destinations.searchLists(form, optionValue, 'previewDestination');

        worksDestinationID.val(destinations.worksDestinationID);
        $('#fileProjectThumbnailDestinationID').val(destinations.thumbnailDestinationID);
        $('#fileProjectDescriptionImageDestinationID').val(destinations.previewDestinationID);

        BSQUARED.Forms.loadValues(worksURL + '/' + worksDestinationID.val(), destinations.worksDestinationID, 'works', [title, description, link]);
    };

    var getDestinations = function getDestinations(destination_id) {
        var worksThumbnail = $('#fileProjectThumbnail');
        var worksPreview = $('#fileProjectDescriptionImage');

        var userIDStart = worksThumbnail.attr('name').lastIndexOf('_');
        var userID = worksThumbnail.attr('name').substr(userIDStart + 1);
        switch (destination_id) {
            case '1':
                setDestinations(1);
                worksThumbnail.attr('name', 'works_thumbnail_image_1_user_' + userID);
                worksPreview.attr('name', 'works_preview_image_1_user_' + userID);
                break;
            case '2':
                setDestinations(2);
                worksThumbnail.attr('name', 'works_thumbnail_image_2_user_' + userID);
                worksPreview.attr('name', 'works_preview_image_2_user_' + userID);
                break;
            case '3':
                setDestinations(3);
                worksThumbnail.attr('name', 'works_thumbnail_image_3_user_' + userID);
                worksPreview.attr('name', 'works_preview_image_3_user_' + userID);
                break;
            case '4':
                setDestinations(4);
                worksThumbnail.attr('name', 'works_thumbnail_image_4_user_' + userID);
                worksPreview.attr('name', 'works_preview_image_4_user_' + userID);
                break;
            case '5':
                setDestinations(5);
                worksThumbnail.attr('name', 'works_thumbnail_image_5_user_' + userID);
                worksPreview.attr('name', 'works_preview_image_5_user_' + userID);
                break;
            case '6':
                setDestinations(6);
                worksThumbnail.attr('name', 'works_thumbnail_image_6_user_' + userID);
                worksPreview.attr('name', 'works_preview_image_6_user_' + userID);
                break;
            case '7':
                setDestinations(7);
                worksThumbnail.attr('name', 'works_thumbnail_image_7_user_' + userID);
                worksPreview.attr('name', 'works_preview_image_7_user_' + userID);
                break;
            case '8':
                setDestinations(8);
                worksThumbnail.attr('name', 'works_thumbnail_image_8_user_' + userID);
                worksPreview.attr('name', 'works_preview_image_8_user_' + userID);
                break;
            case '9':
                setDestinations(9);
                worksThumbnail.attr('name', 'works_thumbnail_image_9_user_' + userID);
                worksPreview.attr('name', 'works_preview_image_9_user_' + userID);
                break;
            default:
                setDestinations(1);
                worksThumbnail.attr('name', 'works_thumbnail_image_1_user_' + userID);
                worksPreview.attr('name', 'works_preview_image_1_user_' + userID);
        }
    };

    return {
        init: function init() {
            var worksDestinationID = $('#worksDestinationID');
            var descriptionImageDestinationID = $('#fileProjectDescriptionImageDestinationID');
            var thumbnailImageDestinationID = $('#fileProjectThumbnailDestinationID');
            var formSelectDestination = $('#works_DestinationID');

            $('#fileProjectThumbnail').hide();
            $('#fileProjectDescriptionImage').hide();
            $('#txtWorksTitle').focus();

            worksDestinationID.val(10);
            descriptionImageDestinationID.val(25);
            thumbnailImageDestinationID.val(10);

            var checkedURL = BSQUARED.Utilities.checkPath(worksURL);

            if (checkedURL === 'works') {
                BSQUARED.Forms.loadValues(worksURL + '/' + worksDestinationID.val(), worksDestinationID.val(), 'works', [title, description, link]);
            }

            formSelectDestination.on('change', function () {
                destination_id = formSelectDestination.find('option:selected').val();
                getDestinations(destination_id);
            });

            $('#btnSubmitWorksItem').on('click', function (event) {
                event.preventDefault();
                var $post = {};

                $('#userWorkPreviewImageForm').submit();
                $('#userWorkThumbnailForm').submit();

                $post.workTitle = $('#txtWorksTitle').val();
                $post.workDescription = $('#txtAreaProjectDescription').val();
                $post.workLink = $('#txtProjectLink').val();
                $post.workDestinationID = $('#worksDestinationID').val();

                BSQUARED.Forms.post('POST', worksURL, $post);
            });

            $('#userWorkThumbnailForm').submit(function (event) {
                event.preventDefault();

                var data = new FormData($('#userWorkThumbnailForm')[0]);
                data.append('destinationID', $('#fileProjectThumbnailDestinationID').val());
                data.append('photoValue', $('#works_DestinationID option:selected').val());
                BSQUARED.Forms.postFiles("POST", pathURL, data);
            });

            $('#userWorkPreviewImageForm').submit(function (event) {
                event.preventDefault();

                var data = new FormData($('#userWorkPreviewImageForm')[0]);
                data.append('destinationID', $('#fileProjectDescriptionImageDestinationID').val());
                data.append('photoValue', $('#works_DestinationID option:selected').val());
                BSQUARED.Forms.postFiles("POST", pathURL, data);
            });

            $('#btnAddProjectThumbnail').on('click', function () {
                event.preventDefault();
                $('#fileProjectThumbnail').click();
            });

            $('#btnAddProjectDescriptionImage').on('click', function (event) {
                event.preventDefault();
                $('#fileProjectDescriptionImage').click();
            });
        }
    };
}();

/**
 * Created by Aaron Young on 6/3/2016.
 */

BSQUARED.Utilities = function () {

    return {

        checkPath: function checkPath(url) {
            url = url.slice(1);
            var slash = url.indexOf('/');
            url = url.slice(0, slash);
            return url;
        }
    };
}();

/**
 * Created by Aaron Young on 6/3/2016.
 */

BSQUARED.Destinations = function () {

    var destinations = {

        "profile": {
            "destination_ID": 20
        },
        "statement": {
            "destination_ID": 21
        },

        "portfolioPicture": {
            "destination_ID": 36
        },

        "about": {
            "1": {
                "columnDestination": 7,
                "labelDestination": 22,
                "image": 22
            },
            "2": {
                "columnDestination": 8,
                "labelDestination": 23,
                "image": 23
            },

            "3": {
                "columnDestination": 9,
                "labelDestination": 24,
                "image": 24
            }
        },

        "skills": {

            "1": {
                "columnDestination": 4,
                "labelDestination": 1,
                "image": 1
            },

            "2": {
                "columnDestination": 5,
                "labelDestination": 2,
                "image": 2
            },

            "3": {
                "columnDestination": 6,
                "labelDestination": 3,
                "image": 3
            }
        },

        "resume": {
            "destination_ID": 35
        },

        "works": {

            "1": {
                "previewDestination": 25,
                "thumbDestination": 10,
                "general": 10
            },

            "2": {
                "previewDestination": 26,
                "thumbDestination": 11,
                "general": 11
            },

            "3": {
                "previewDestination": 27,
                "thumbDestination": 12,
                "general": 12
            },

            "4": {
                "previewDestination": 28,
                "thumbDestination": 13,
                "general": 13
            },

            "5": {
                "previewDestination": 29,
                "thumbDestination": 14,
                "general": 14
            },

            "6": {
                "previewDestination": 30,
                "thumbDestination": 15,
                "general": 15
            },

            "7": {
                "previewDestination": 31,
                "thumbDestination": 16,
                "general": 16
            },

            "8": {
                "previewDestination": 32,
                "thumbDestination": 17,
                "general": 17
            },

            "9": {
                "previewDestination": 33,
                "thumbDestination": 18,
                "general": 18
            }
        }
    };

    return {

        init: function init() {},

        searchLists: function searchLists(key, optionValue, value) {
            return destinations[key][optionValue][value];
        },

        searchListKeyValue: function searchListKeyValue(key, optionValue) {
            return destinations[key][optionValue];
        }
    };
}();
//# sourceMappingURL=Bsquared.js.map
