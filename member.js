function skillsMember()
{
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsValue = memberSkills.options[memberSkills.selectedIndex].value;
    var memberSkillsText = memberSkills.options[memberSkills.selectedIndex].text;

    if (memberValue == "yes")
    {
        document.getElementById("memberSkills").disabled = false;
        document.getElementById("memberSkills").style.display = "inline";
        document.getElementById("memberSkillsLabel").style.display = "inline";
    }
    else
    {
        document.getElementById("memberSkills").disabled = true;
        document.getElementById("memberSkills").style.display = "none";
        document.getElementById("memberSkillsLabel").style.display = "none";
    }
}
