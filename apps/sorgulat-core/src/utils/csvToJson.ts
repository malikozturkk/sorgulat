export const csvToJson = (csvString: string): Array<object> => {
  const lines = csvString.split('\n');
  const headers = lines[0].split(',');
  const jsonArray = lines.slice(1).map(line => {
    const values = line.split(',');
    let obj: { [key: string]: any } = {};

    headers.forEach((header, i) => {
      obj[header.trim()] = values[i].trim();
    });

    return obj;
  });

  return jsonArray;
}