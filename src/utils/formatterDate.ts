// export class FormatterDate {
//   static formatDate(date: Date): string {
//     const newDate = new Date(date);
//     return Intl.DateTimeFormat("es-ES", {
//       year: "numeric",
//       month: "long",
//       day: "2-digit",
//     }).format(newDate);
//   }
// }

export class FormatterDate {
  static formatDate(date: Date): string {
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}