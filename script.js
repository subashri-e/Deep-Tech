function toggleSidebar() {
    const lside = document.querySelector('.lside');
    lside.classList.toggle('expanded');

    const journeyTitle = document.querySelector('.journey-title');
    const journeyList = document.querySelector('.journey-list');
    const stepCircle = document.querySelector('.step-circle');
    const arrowIcon = document.querySelector('.arrow-icon');

    if (lside.classList.contains('expanded')) {
        journeyTitle.classList.remove('hidden');
        journeyList.classList.remove('hidden');
        stepCircle.classList.add('hidden');
        arrowIcon.classList.remove('right');
        arrowIcon.classList.add('down');
    } else {
        journeyTitle.classList.add('hidden');
        journeyList.classList.add('hidden');
        stepCircle.classList.remove('hidden');
        arrowIcon.classList.remove('down');
        arrowIcon.classList.add('right');
    }
}
