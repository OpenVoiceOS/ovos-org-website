var dev_auth_checked

function change_bool(id) {
    let elements = document.getElementById(id);
    console.log(elements.checked)
}

function check_loc_geo(element_id) {
    let loc = document.getElementById("override_location");
    let geo = document.getElementById("ip_geolocate");
    if (element_id == 'loc' && loc.checked) {
        geo.checked = false;
    }
    if (element_id == 'geo' && geo.checked) {
        loc.checked = false;
    }
}

// function check_skip_auth(element_id) {
//     let auth = document.getElementById(element_id);
//     if (auth.checked) {}
// }

function my_test(element_id) {
    console.log(element_id)
    let f = document.getElementById(element_id);
    console.log(f)
    // f.submit();
    console.log(f.checked);
    console.log('stringhere')
}

function dev_auth () {
    let dev_auth_checked = document.getElementById('dev_auth').checked;
    console.log(dev_auth_checked);
    let value = ("{{ func('" + dev_auth_checked + "') }}");
    console.log(value);
    return string(value);
}

function get_dev_auth() {
    if (dev_auth_checked) {
        return 'True';
    } else {
        return 'False';
    }
}

function change_navbar_button(url, new_icon, text) {
    let icon = "icon " + new_icon + " std_txt pad_r_sm";
    let innerHTML = "<a id=\"navbar_button_link\" href=\"" + url + "\"><button id=\"login_logout\" class=\"btn sm_txt\"><i id=\"navbar_button_icon\" class=\"" + icon + "\"></i>" + text + "</button></a>";
    document.getElementById('navbar_button').innerHTML = innerHTML;
}

function change_checkbox(id) {
    let element = document.getElementById(id);
    console.log(element.checked);
    change_navbar_button('/auth', 'icon_edit-redo', 'APPLY')
    let return_value = "\"{{ functions.change_setting('a', 'b') }}\""
    console.log(return_value)
    document.getElementById(id).onchange = return_value
}

function test_me(element) {
    console.log("here i am");
    console.log(document.getElementById(element))
}

function submit_from_text(element_id) {
    console.log(document.forms.namedItem(element_id))
    document.getElementById(element_id).submit()
}
