/**
 * Format a given date into the "DD/MM/YYYY" format.
 * @param date - The date to be formatted.
 * @returns The formatted date string.
 */

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());

    return `${day}/${month}/${year}`;
}

/**
 * Format a birthday date and include the age in the output.
 * @param birthday - The birthday date to be formatted.
 * @returns The formatted birthday string in the format "DD Month YYYY (age)".
 */

export function formatBirthday(birthdayString: string): string {
    const birthday = new Date(birthdayString);
    const today = new Date();
    const day = String(birthday.getDate()).padStart(2);
    const monthIndex = birthday.getMonth();
    const year = String(birthday.getFullYear());
    let age: number = today.getFullYear() - birthday.getFullYear();

    // Check if the birthday has not occurred yet this year
    if (
        today.getMonth() < birthday.getMonth() ||
        (today.getMonth() === birthday.getMonth() &&
            today.getDate() < birthday.getDate())
    ) {
        age--;
    }

    const monthNames = [
        'Januar',
        'Februar',
        'März',
        'April',
        'Mai',
        'Juni',
        'Juli',
        'August',
        'September',
        'Oktober',
        'November',
        'Dezember',
    ];
    const month: string = monthNames[monthIndex] as string;

    return `${day} ${month} ${year} (${age})`;
}

/**
 * Convert a string date to a formatted date string.
 * @param dateString - The string representing the date.
 * @returns The formatted date string in the format "DD/MM/YYYY HH:mm a".
 */
export function formatDateWithTime(dateString: string): string {
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    };

    const datePart = date.toLocaleDateString('en-GB', options);
    const timePart = date.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    return `${datePart} ${timePart}`;
}

