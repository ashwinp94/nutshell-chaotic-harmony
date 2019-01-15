const events = {
    eventAppend() {
        let eventEntry = document.querySelector("#eventsOutput");
        eventEntry.innerHTML = `<section class="date">
        <fieldset>
            <label for="eventsDate">events date</label>
            <input type="Date" name="JournalDate" id="eventsDate">
        </fieldset>
    </section>
    <section class="name">
        <fieldset>
            <label for="ConceptCovered">events name</label>
            <input type="text" name="eventsName" id="eventsName">
        </fieldset>
    </section>
    <section class="Location">
        <fieldset>
            <label for="entryLocation"> entry location</label>
            <input type="text" name="entryLocation" id="entryLocation">
        </fieldset>
        <button class="newAccount">Register</button>
    </section>`
    }
}