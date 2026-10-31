import { LevelData } from '../types';

export const LEVELS_DATA: LevelData[] = [
  // LEVEL 01
  {
    id: 1,
    exerciseNumber: 23,
    weekNumber: 6,
    weekTitle: {
      kn: 'ವಾರ 6: ಕಡತ ನಿರ್ವಹಣೆ ಮತ್ತು ದೋಷ ನಿರ್ವಹಣೆ',
      en: 'Week 6: File Handling And Exception Handling'
    },
    title: {
      kn: 'ಲೆವೆಲ್ 01 – CSV ಕಡತ ಪತ್ತೆದಾರಿ (CSV File Detective)',
      en: 'Level 01 – CSV File Detective'
    },
    subtitle: {
      kn: 'CSV ಕಡತದಿಂದ ಡೇಟಾ ಓದುವುದು ಮತ್ತು ಸಾಲುಗಳನ್ನು ಎಣಿಸುವುದು',
      en: 'Read Data from a CSV File and Count Rows'
    },
    badgeName: {
      kn: 'ಡೇಟಾ ಡಿಟೆಕ್ಟಿವ್ (Data Detective)',
      en: 'Data Detective'
    },
    badgeIcon: 'FileSpreadsheet',
    category: 'File Handling',
    step1What: {
      description: {
        kn: 'CSV ಎಂದರೆ "ಕಾಮಾ ಸೆಪರೇಟೆಡ್ ವ್ಯಾಲ್ಯೂಸ್" (Comma Separated Values). ಇದು ಎಕ್ಸೆಲ್ ಶೀಟ್‌ನಂತೆ ಡೇಟಾವನ್ನು ಸರಳ ಪಠ್ಯ ರೂಪದಲ್ಲಿ ಶೇಖರಿಸುವ ವಿಧಾನವಾಗಿದೆ. ಈ ಪ್ರೋಗ್ರಾಂನಲ್ಲಿ ನಾವು `student.csv` ಫೈಲ್ ಅನ್ನು ತೆರೆದು, ಅದರಲ್ಲಿ ಒಟ್ಟು ಎಷ್ಟು ಸಾಲುಗಳು (records) ಇವೆ ಎಂದು ಎಣಿಸುತ್ತೇವೆ.',
        en: 'CSV stands for Comma-Separated Values. It is a clean way to store tabular data like an Excel sheet in plain text. In this mission, we read a file called student.csv and count the total number of student rows.'
      },
      keyPoints: [
        { kn: '`csv` ಮಾಡ್ಯೂಲ್ ಅನ್ನು ಪೈಥಾನ್‌ನಲ್ಲಿ ಬಳಸಲು `import csv` ಬರೆಯಬೇಕು.', en: 'Use `import csv` to unlock Python built-in CSV tools.' },
        { kn: '`open("student.csv", "r")` ಫೈಲ್ ಅನ್ನು ಓದಲು (read mode) ತೆರೆಯುತ್ತದೆ.', en: '`open("student.csv", "r")` opens the file in read mode.' },
        { kn: 'ಲೂಪ್ (loop) ಬಳಸಿ ಪ್ರತಿಯೊಂದು ಸಾಲನ್ನು ಓದಿ ಕೌಂಟ್ (count) 1 ಹೆಚ್ಚಿಸುತ್ತೇವೆ.', en: 'A for loop counts each record line one by one.' }
      ]
    },
    step2Engineering: {
      title: {
        kn: 'ಮೆಕ್ಯಾನಿಕಲ್ ಇಂಜಿನಿಯರಿಂಗ್‌ನಲ್ಲಿ ಇದರ ಬಳಕೆ ಏನು?',
        en: 'Mechanical Engineering Application'
      },
      analogy: {
        kn: 'ವರ್ಕ್‌ಶಾಪ್‌ನಲ್ಲಿ ಸಿಎನ್‌ಸಿ (CNC) ಮೆಷಿನ್ ಅಥವಾ ವೆಹಿಕಲ್ ಟೆಸ್ಟಿಂಗ್ ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಡೇಟಾ ಲಾಗರ್ (Data Logger) ಇರುತ್ತದೆ. ಅದು ಪ್ರತಿ ಸೆಕೆಂಡಿಗೆ ಮೋಟಾರ್ ವೇಗ (RPM), ಉಷ್ಣಾಂಶ (Temp) ಮತ್ತು ಆಯಿಲ್ ಪ್ರೆಶರ್ (Pressure) ಗಳನ್ನು CSV ಫೈಲ್‌ನಲ್ಲಿ ದಾಖಲಿಸುತ್ತದೆ. ಇಂಜಿನಿಯರ್ ಆಗಿ ನೀವು ಆ ಫೈಲ್‌ನಿಂದ ಒಟ್ಟು ಎಷ್ಟು ರೀಡಿಂಗ್‌ಗಳಿವೆ ಎಂದು ತ್ವರಿತವಾಗಿ ಕಂಡುಹಿಡಿಯಲು ಈ ಕೋಡ್ ಬಳಸುತ್ತೀರಿ!',
        en: 'In a mechanical workshop or vehicle dyno test rig, a digital data logger logs engine RPM, cooling water temperature, and hydraulic pressure directly into CSV files every second. As an engineer, you write Python scripts to inspect how many readings were captured!'
      },
      industryUseCase: {
        kn: 'ಆಟೋಮೊಬೈಲ್ ಡಯಾಗ್ನಾಸ್ಟಿಕ್ಸ್ ಮತ್ತು ಗುಣಮಟ್ಟ ನಿಯಂತ್ರಣ (Automobile Diagnostics & QC logs).',
        en: 'Automobile Sensor Logging & Production Batch Auditing.'
      },
      icon: 'HardHat'
    },
    step3Python: {
      title: {
        kn: 'ಕಲಿಯಬೇಕಾದ 3 ಸರಳ ಪೈಥಾನ್ ನಿಯಮಗಳು',
        en: '3 Simple Python Concepts'
      },
      summary: {
        kn: 'ಫೈಲ್ ನಿರ್ವಹಣೆಗೆ 3 ಹಂತಗಳಿವೆ: ಓಪನ್ ಮಾಡುವುದು (Open) -> ಡೇಟಾ ಓದುವುದು (Read) -> ಕ್ಲೋಸ್ ಮಾಡುವುದು (Close).',
        en: 'File handling follows 3 easy steps: Open the file -> Read/Process contents -> Close the file.'
      },
      rules: [
        { kn: '1. `import csv`: CSV ಸೌಲಭ್ಯಗಳನ್ನು ಪೈಥಾನ್‌ಗೆ ತರುತ್ತದೆ.', en: '1. `import csv`: imports Python CSV library.' },
        { kn: '2. `csv.reader(file)`: ಫೈಲ್‌ನಲ್ಲಿರುವ ಡೇಟಾವನ್ನು ಸಾಲು-ಸಾಲಾಗಿ ಓದಲು ಸಿದ್ಧಪಡಿಸುತ್ತದೆ.', en: '2. `csv.reader(file)`: parses file lines as comma separated values.' },
        { kn: '3. `count = count + 1`: ಪ್ರತಿ ಸಾಲಿಗೂ ಕೌಂಟರ್ ಒಂದೊಂದಾಗಿ ಹೆಚ್ಚಾಗುತ್ತದೆ.', en: '3. `count = count + 1`: increments counter for every row seen.' },
        { kn: '4. `file.close()`: ಕೆಲಸ ಮುಗಿದ ನಂತರ ಫೈಲ್ ಮುಚ್ಚಿ ಮೆಮೊರಿ ಉಳಿಸಬೇಕು.', en: '4. `file.close()`: always closes the open file resource.' }
      ],
      terms: [
        { term: 'import', meaningKn: 'ಹೊರಗಿನ ಲೈಬ್ರರಿಯನ್ನು ಪ್ರೋಗ್ರಾಂಗೆ ತರುವುದು', meaningEn: 'Brings external library module into the program' },
        { term: 'open()', meaningKn: 'ಕಂಪ್ಯೂಟರ್‌ನಲ್ಲಿರುವ ಕಡತವನ್ನು ತೆರೆಯುವ ಆದೇಶ', meaningEn: 'Function to open a file from storage' },
        { term: 'csv.reader()', meaningKn: 'ಕಾಮಾಗಳಿಂದ ಬೇರ್ಪಟ್ಟ ಸಾಲುಗಳನ್ನು ಓದುವ ಸಾಧನ', meaningEn: 'Reader object iterating over rows' },
        { term: 'for row in data', meaningKn: 'ಪ್ರತಿ ಸಾಲನ್ನು ಒಂದೊಂದಾಗಿ ಪರಿಶೀಲಿಸುವ ಲೂಪ್', meaningEn: 'Loop visiting each record in the file' }
      ]
    },
    step4Code: {
      originalCode: `import csv
file = open("student.csv", "r")
data = csv.reader(file)
count = 0
for row in data :
count = count + 1
print("Number of Rows =", count)
file.close()`,
      sampleDataDescription: {
        kn: 'ಮ್ಯಾನುಯಲ್ ಸೂಚನೆಯಂತೆ `student.csv` ಫೈಲ್‌ನ ವಿಷಯ:\nName,Age\nRavi,18\nManu,19\nAsha,17',
        en: 'Manual requirement for student.csv content:\nName,Age\nRavi,18\nManu,19\nAsha,17'
      },
      virtualFiles: {
        'student.csv': 'Name,Age\nRavi,18\nManu,19\nAsha,17\n'
      }
    },
    step5LineByLine: [
      { line: 1, code: 'import csv', kn: 'ಪೈಥಾನ್‌ನ ಇನ್‌ಬಿಲ್ಟ್ `csv` ಮಾಡ್ಯೂಲ್ ಅನ್ನು ಆಮದು ಮಾಡಿಕೊಳ್ಳುತ್ತದೆ.', en: 'Imports Python built-in csv module.' },
      { line: 2, code: 'file = open("student.csv", "r")', kn: '`student.csv` ಫೈಲ್ ಅನ್ನು "r" (Read - ಓದುವಿಕೆ) ಮೋಡ್‌ನಲ್ಲಿ ತೆರೆಯುತ್ತದೆ.', en: 'Opens student.csv in read mode ("r").' },
      { line: 3, code: 'data = csv.reader(file)', kn: 'CSV ರೀಡರ್ ಆಬ್ಜೆಕ್ಟ್ ರಚಿಸಿ ಫೈಲ್ ವಿಷಯಗಳನ್ನು ಸಾಲುಗಳನ್ನಾಗಿ ವಿಭಾಗಿಸುತ್ತದೆ.', en: 'Creates CSV reader object to read rows.' },
      { line: 4, code: 'count = 0', kn: 'ಸಾಲುಗಳನ್ನು ಎಣಿಸಲು ಆರಂಭಿಕವಾಗಿ `count` ಬೆಲೆಯನ್ನು 0 ಎಂದು ನಿಗದಿಪಡಿಸುತ್ತದೆ.', en: 'Initializes counter variable to 0.' },
      { line: 5, code: 'for row in data :', kn: 'ಡೇಟಾದಲ್ಲಿರುವ ಪ್ರತಿಯೊಂದು ಸಾಲಿಗೂ ಒಮ್ಮೆ ಲೂಪ್ ಚಲಿಸುತ್ತದೆ.', en: 'Iterates through each row in the csv data.' },
      { line: 6, code: 'count = count + 1', kn: 'ಪ್ರತಿ ಸಾಲು ಸಿಕ್ಕಾಗಲೂ ಕೌಂಟ್ ಅನ್ನು 1 ರಷ್ಟು ಹೆಚ್ಚಿಸುತ್ತದೆ (Increment).', en: 'Increments the counter by 1 for each row.' },
      { line: 7, code: 'print("Number of Rows =", count)', kn: 'ಒಟ್ಟು ಸಾಲುಗಳ ಸಂಖ್ಯೆಯನ್ನು ಸ್ಕ್ರೀನ್ ಮೇಲೆ ಪ್ರಿಂಟ್ ಮಾಡುತ್ತದೆ.', en: 'Prints total number of counted rows.' },
      { line: 8, code: 'file.close()', kn: 'ತೆರೆದ ಫೈಲ್ ಅನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಕ್ಲೋಸ್ ಮಾಡುತ್ತದೆ.', en: 'Safely closes the file stream.' }
    ],
    step6Predict: {
      prompt: {
        kn: '`student.csv` ಫೈಲ್‌ನಲ್ಲಿ "Name,Age", "Ravi,18", "Manu,19", "Asha,17" ಇದೆ. ಈ ಪ್ರೋಗ್ರಾಂ ರನ್ ಮಾಡಿದಾಗ ಏನು ಪ್ರಿಂಟ್ ಆಗುತ್ತದೆ?',
        en: 'student.csv contains header "Name,Age" plus 3 student rows (Ravi, Manu, Asha). What will this program print?'
      },
      options: [
        {
          textKn: 'Number of Rows = 3',
          textEn: 'Number of Rows = 3',
          isCorrect: false,
          explanationKn: 'ಗಮನಿಸಿ: `csv.reader` ಹೆಡರ್ ಸಾಲನ್ನೂ (Name,Age) ಒಂದು ಸಾಲು ಎಂದೇ ಎಣಿಸುತ್ತದೆ! ಆದ್ದರಿಂದ 1 ಹೆಡರ್ + 3 ವಿದ್ಯಾರ್ಥಿಗಳು = 4 ಸಾಲುಗಳು.',
          explanationEn: 'Notice that csv.reader also counts the header line (Name, Age) as a row! 1 header + 3 students = 4 rows.'
        },
        {
          textKn: 'Number of Rows = 4',
          textEn: 'Number of Rows = 4',
          isCorrect: true,
          explanationKn: 'ಸರಿಯಾದ ಉತ್ತರ! ಹೆಡರ್ ಸಾಲು ಸೇರಿ ಒಟ್ಟು 4 ಸಾಲುಗಳನ್ನು ಪೈಥಾನ್ ಎಣಿಸುತ್ತದೆ.',
          explanationEn: 'Correct! 1 header row + 3 data rows = 4 rows counted by csv.reader.'
        },
        {
          textKn: 'Number of Rows = 0',
          textEn: 'Number of Rows = 0',
          isCorrect: false,
          explanationKn: 'ತಪ್ಪು. ಫೈಲ್‌ನಲ್ಲಿ ಸಾಲುಗಳು ಇರುವುದರಿಂದ ಕೌಂಟ್ 0 ಆಗಿರಲು ಸಾಧ್ಯವಿಲ್ಲ.',
          explanationEn: 'Incorrect. The file contains 4 lines so the loop runs 4 times.'
        }
      ]
    },
    step7Run: {
      expectedStdout: 'Number of Rows = 4',
      isSimulation: false,
      simulationType: 'csv'
    },
    step8Challenge: [
      {
        id: 'q1',
        questionKn: 'CSV ಫೈಲ್ ಅನ್ನು ಓದುವ ಉದ್ದೇಶಕ್ಕಾಗಿ ಮಾತ್ರ ತೆರೆಯಲು ಯಾವ ಮೋಡ್ (Mode) ಬಳಸುತ್ತೇವೆ?',
        questionEn: 'Which mode is passed to open() to open a file for reading only?',
        options: [
          { textKn: '"w" (Write)', textEn: '"w" (Write)', isCorrect: false },
          { textKn: '"r" (Read)', textEn: '"r" (Read)', isCorrect: true },
          { textKn: '"a" (Append)', textEn: '"a" (Append)', isCorrect: false }
        ],
        hintKn: '"Read" ಪದದ ಮೊದಲ ಅಕ್ಷರ ನೋಡಿ.',
        hintEn: 'Think of the first letter of "Read".',
        explanationKn: '"r" ಎಂದರೆ Read mode. ಇದು ಫೈಲ್ ಕೇವಲ ಓದಲು ಮಾತ್ರ ತೆರೆಯುತ್ತದೆ.',
        explanationEn: '"r" specifies read mode in Python open().'
      },
      {
        id: 'q2',
        questionKn: 'ಫೈಲ್ ಓದಿ ಮುಗಿದ ನಂತರ ಕಂಪ್ಯೂಟರ್ ಸಂಪನ್ಮೂಲ ಬಿಡುಗಡೆ ಮಾಡಲು ಯಾವ ಫಂಕ್ಷನ್ ಕರೆಯಬೇಕು?',
        questionEn: 'Which function must be called after file operations to free system resources?',
        options: [
          { textKn: 'file.close()', textEn: 'file.close()', isCorrect: true },
          { textKn: 'file.exit()', textEn: 'file.exit()', isCorrect: false },
          { textKn: 'file.delete()', textEn: 'file.delete()', isCorrect: false }
        ],
        hintKn: 'ಬಾಗಿಲು ಮುಚ್ಚುವ ಪದ ಯಾವುದು?',
        hintEn: 'Opposite of open.',
        explanationKn: '`file.close()` ಫೈಲ್ ಸಂಪರ್ಕವನ್ನು ಕೊನೆಗೊಳಿಸುತ್ತದೆ.',
        explanationEn: '`file.close()` releases the file handle.'
      }
    ],
    practiceMode: {
      cloze: {
        instructionKn: 'ಖಾಲಿ ಬಿಟ್ಟ ಜಾಗಗಳಲ್ಲಿ ಸರಿಯಾದ CSV ಕೀವರ್ಡ್‌ಗಳನ್ನು ತುಂಬಿರಿ:',
        instructionEn: 'Fill in the blanks with the correct Python keywords:',
        codeTemplate: `import {{BLANK1}}
file = open("student.csv", "r")
data = csv.{{BLANK2}}(file)
count = 0
for row in data :
    count = count + 1
print("Number of Rows =", count)
file.{{BLANK3}}()`,
        blanks: [
          { id: 'BLANK1', answer: 'csv', options: ['csv', 'pandas', 'math', 'os'] },
          { id: 'BLANK2', answer: 'reader', options: ['reader', 'writer', 'load', 'parse'] },
          { id: 'BLANK3', answer: 'close', options: ['close', 'end', 'stop', 'quit'] }
        ]
      },
      termMatches: [
        { term: 'import csv', meaningKn: 'CSV ಕಡತ ನಿರ್ವಹಣಾ ಮಾಡ್ಯೂಲ್ ಸೇರಿಸು', meaningEn: 'Import CSV library' },
        { term: 'count = count + 1', meaningKn: 'ಪ್ರತಿ ಸಾಲನ್ನು ಎಣಿಸುವುದು', meaningEn: 'Increment row count' },
        { term: 'file.close()', meaningKn: 'ಕಡತವನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಮುಚ್ಚುವುದು', meaningEn: 'Safely close file' }
      ]
    },
    testMode: {
      questions: [
        {
          id: 'v1',
          questionKn: 'CSV ಯ ಪೂರ್ಣ ರೂಪ (Full Form) ಏನು?',
          questionEn: 'What does CSV stand for in computing?',
          options: [
            { textKn: 'Comma Separated Values', textEn: 'Comma Separated Values', isCorrect: true },
            { textKn: 'Computer System Variable', textEn: 'Computer System Variable', isCorrect: false },
            { textKn: 'Continuous Simple Vector', textEn: 'Continuous Simple Vector', isCorrect: false }
          ],
          explanationKn: 'CSV ಎಂದರೆ Comma Separated Values (ಕಾಮಾಗಳಿಂದ ಪ್ರತ್ಯೇಕಿಸಲ್ಪಟ್ಟ ಮೌಲ್ಯಗಳು).',
          explanationEn: 'CSV stands for Comma Separated Values.'
        },
        {
          id: 'v2',
          questionKn: 'ಲ್ಯಾಬ್ ಮ್ಯಾನುಯಲ್‌ನ ಪ್ರಕಾರ `student.csv` ಯಲ್ಲಿ ಎಷ್ಟು ಸಾಲುಗಳು ಮುದ್ರಿತವಾಗುತ್ತವೆ?',
          questionEn: 'According to the lab manual sample, what is the output of Ex. No: 23?',
          options: [
            { textKn: 'Number of Rows = 4', textEn: 'Number of Rows = 4', isCorrect: true },
            { textKn: 'Number of Rows = 3', textEn: 'Number of Rows = 3', isCorrect: false },
            { textKn: 'Number of Rows = 5', textEn: 'Number of Rows = 5', isCorrect: false }
          ],
          explanationKn: 'ಹೆಡರ್ (Name,Age) ಮತ್ತು 3 ವಿದ್ಯಾರ್ಥಿಗಳ ಮಾಹಿತಿ ಸೇರಿ ಒಟ್ಟು 4 ಸಾಲುಗಳು.',
          explanationEn: 'The header row plus 3 student data rows equals 4 rows.'
        }
      ]
    },
    teacherNotes: {
      observationKn: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಾಮಾನ್ಯವಾಗಿ ಹೆಡರ್ ಲೈನ್ ಕೂಡ ಒಂದು ರೋ ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಕಷ್ಟವಾಗುತ್ತದೆ. ಅವರು 3 ಎಂದೇ ಹೇಳಬಹುದು. ಹೆಡರ್ ಲೈನ್ Skip ಮಾಡಲು `next(data)` ಬಳಸಬಹುದು ಎಂದು ವಿವರಿಸಬಹುದು, ಆದರೆ ಮ್ಯಾನುಯಲ್ ಕೋಡ್ ಬದಲಿಸಬಾರದು.',
      observationEn: 'Students commonly assume 3 rows because of 3 students. Clarify that csv.reader treats the header row as the first row. In production one would use next(data) to skip header, but manual code must remain preserved.',
      labTipsKn: 'ವಿದ್ಯಾರ್ಥಿಗಳು student.csv ಫೈಲ್ ಅನ್ನು ಪೈಥಾನ್ ಸ್ಕ್ರಿಪ್ಟ್ ಇರುವ ಅದೇ ಫೋಲ್ಡರ್‌ನಲ್ಲಿ ಉಳಿಸಿದ್ದಾರೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.',
      labTipsEn: 'Ensure student.csv is placed in the current working directory of the script.'
    }
  },

  // LEVEL 02
  {
    id: 2,
    exerciseNumber: 24,
    weekNumber: 7,
    weekTitle: {
      kn: 'ವಾರ 7: ಆಬ್ಜೆಕ್ಟ್-ಓರಿಯೆಂಟೆಡ್ ಪ್ರೋಗ್ರಾಮಿಂಗ್ (OOP)',
      en: 'Week 7: Object-Oriented Programming (Oop)'
    },
    title: {
      kn: 'ಲೆವೆಲ್ 02 – ನಿಮ್ಮ ಸ್ವಂತ ಕಾರು ನಿರ್ಮಿಸಿ (Build Your Own Car)',
      en: 'Level 02 – Build Your Own Car'
    },
    subtitle: {
      kn: 'ಕ್ಲಾಸ್ (Class), ಆಬ್ಜೆಕ್ಟ್ (Object), ಆಟ್ರಿಬ್ಯೂಟ್ಸ್ ಮತ್ತು ಮೆಥಡ್ಸ್',
      en: 'Car Class with Attributes and Methods'
    },
    badgeName: {
      kn: 'ಆಟೋಮೊಬೈಲ್ ಡಿಸೈನರ್ (Automobile Designer)',
      en: 'Automobile Designer'
    },
    badgeIcon: 'Car',
    category: 'OOP',
    step1What: {
      description: {
        kn: 'ಈ ಪ್ರೋಗ್ರಾಂನಲ್ಲಿ ನಾವು `Car` ಎಂಬ ಕ್ಲಾಸ್ (Class) ಅನ್ನು ರಚಿಸುತ್ತೇವೆ. ಕಾರಿನ ಲಕ್ಷಣಗಳಾದ ಮಾಡೆಲ್ (model), ವರ್ಷ (year), ಮತ್ತು ಬಣ್ಣ (color) ಗಳನ್ನು ವ್ಯಾಖ್ಯಾನಿಸಿ, ಕಾರನ್ನು ಸ್ಟಾರ್ಟ್ (start), ಸ್ಟಾಪ್ (stop) ಮತ್ತು ವಿವರಗಳನ್ನು ಪ್ರದರ್ಶಿಸಲು (display) ಮೆಥಡ್‌ಗಳನ್ನು ಬರೆಯುತ್ತೇವೆ.',
        en: 'We create a Car class with attributes like model, year, and color. We also define actions (methods): start(), stop(), and display().'
      },
      keyPoints: [
        { kn: '`class Car` ಕಾರನ್ನು ತಯಾರಿಸುವ ನೀಲನಕ್ಷೆ (Blueprint).', en: '`class Car` is the blueprint for manufacturing cars.' },
        { kn: '`__init__` ಕನ್‌ಸ್ಟ್ರಕ್ಟರ್ ಹೊಸ ಕಾರು ಸೃಷ್ಟಿಯಾದಾಗ ಅದರ ಗುಣಲಕ್ಷಣಗಳನ್ನು ಹೊಂದಿಸುತ್ತದೆ.', en: '`__init__` constructor initializes model, year, and color.' },
        { kn: '`c = Car("Toyota", 2024, "Red")` ನೈಜ ಕಾರು ಆಬ್ಜೆಕ್ಟ್ ಸೃಷ್ಟಿಸುತ್ತದೆ.', en: '`c = Car("Toyota", 2024, "Red")` instantiates an actual car object.' }
      ]
    },
    step2Engineering: {
      title: {
        kn: 'ಆಟೋಮೊಬೈಲ್ ಇಂಜಿನಿಯರಿಂಗ್ ಅನ್ವಯ',
        en: 'Automobile Engineering Connection'
      },
      analogy: {
        kn: 'ಕಾರು ಕಾರ್ಖಾನೆಯಲ್ಲಿ (Car Assembly Plant) ಇಂಜಿನಿಯರ್‌ಗಳು ಮೊದಲು CAD ಡ್ರಾಯಿಂಗ್ / ನೀಲನಕ್ಷೆ (Blueprint) ಮಾಡುತ್ತಾರೆ. ಆ ನೀಲನಕ್ಷೆಯೇ ಪ್ರೋಗ್ರಾಮಿಂಗ್‌ನಲ್ಲಿ "Class". ಆ ಬ್ಲೂಪ್ರಿಂಟ್ ಬಳಸಿ ಸಾವಿರಾರು ನೈಜ ಕಾರುಗಳನ್ನು ಅಸೆಂಬ್ಲಿ ಲೈನ್‌ನಲ್ಲಿ ನಿರ್ಮಿಸುತ್ತಾರೆ. ಆ ಪ್ರತಿ ಕಾರುಗಳೇ "Objects"!',
        en: 'In an automobile assembly plant, engineers create a CAD blueprint first. In Python, that blueprint is called a "Class". Using that same blueprint, hundreds of actual physical cars are manufactured on the shopfloor—each car is an "Object"!'
      },
      industryUseCase: {
        kn: 'ವೆಹಿಕಲ್ ಟೆಲಿಮ್ಯಾಟಿಕ್ಸ್, ಇಸಿಯು (ECU) ಎಂಜಿನ್ ಕಂಟ್ರೋಲರ್ ಪ್ರೋಗ್ರಾಮಿಂಗ್.',
        en: 'Vehicle Telematics and Engine Control Unit (ECU) parameter storage.'
      },
      icon: 'Wrench'
    },
    step3Python: {
      title: {
        kn: 'OOP ಯ 4 ಸರಳ ಪರಿಕಲ್ಪನೆಗಳು',
        en: '4 Simple OOP Concepts'
      },
      summary: {
        kn: 'ಕ್ಲಾಸ್ ಎಂದರೆ ಪ್ಲಾನ್, ಆಬ್ಜೆಕ್ಟ್ ಎಂದರೆ ನೈಜ ಕಾರು, ಮೆಥಡ್ ಎಂದರೆ ಕಾರು ಮಾಡುವ ಕೆಲಸ!',
        en: 'Class is the design plan, Object is the real machine, Method is what it does!'
      },
      rules: [
        { kn: '1. `class Car :` ಹೊಸ ವರ್ಗವನ್ನು ಶುರುಮಾಡುತ್ತದೆ.', en: '1. `class Car :` defines a new class.' },
        { kn: '2. `def __init__(self, ...)`: ಕಾರು ಹುಟ್ಟಿದ ತಕ್ಷಣ ಸೆಟ್ ಆಗುವ ಗುಣಗಳು.', en: '2. `def __init__(self, ...)` is the constructor for initializing properties.' },
        { kn: '3. `self`: ಪ್ರಸ್ತುತ ಕಾರನ್ನು ಉಲ್ಲೇಖಿಸಲು ಪೈಥಾನ್ ಬಳಸುವ ಕೀವರ್ಡ್.', en: '3. `self` refers to the current instance of the object.' },
        { kn: '4. `c.start()`: ಆಬ್ಜೆಕ್ಟ್ ಮೇಲೆ ಕ್ರಿಯೆಯನ್ನು ಚಾಲನೆ ಮಾಡುವುದು.', en: '4. `c.start()` executes the start action on the car instance.' }
      ],
      terms: [
        { term: 'Class (ವರ್ಗ)', meaningKn: 'ವಸ್ತುಗಳನ್ನು ನಿರ್ಮಿಸಲು ಬಳಸುವ ನೀಲನಕ್ಷೆ', meaningEn: 'Blueprint or template for creating objects' },
        { term: 'Object (ವಸ್ತು)', meaningKn: 'ವರ್ಗದ ಆಧಾರದ ಮೇಲೆ ತಯಾರಾದ ನೈಜ ಕಾರು', meaningEn: 'A specific instance created from a class' },
        { term: 'Attribute (ಗುಣಲಕ್ಷಣ)', meaningKn: 'ಮಾಡೆಲ್, ವರ್ಷ, ಬಣ್ಣ ಮುಂತಾದ ಮಾಹಿತಿ', meaningEn: 'Data fields like model, year, color' },
        { term: 'Method (ವಿಧಾನ)', meaningKn: 'ಕಾರು ಮಾಡುವ ಕೆಲಸಗಳು (start, stop)', meaningEn: 'Functions that belong to the class' }
      ]
    },
    step4Code: {
      originalCode: `class Car :
def __init__(self, model, year, color) :
self.model = model
self.year = year
self.color = color
def start(self) :
print("Car Started")
def stop(self) :
print("Car Stopped")
def display(self) :
print("Model =", self.model)
print("Year =", self.year)
print("Color =", self.color)
c = Car("Toyota", 2024, "Red")
c.start()
c.display()
c.stop()`
    },
    step5LineByLine: [
      { line: 1, code: 'class Car :', kn: '`Car` ಎಂಬ ಹೊಸ ಕ್ಲಾಸ್ ಅನ್ನು ಪ್ರಾರಂಭಿಸುತ್ತದೆ.', en: 'Defines the Car class.' },
      { line: 2, code: 'def __init__(self, model, year, color) :', kn: 'ಕನ್‌ಸ್ಟ್ರಕ್ಟರ್ ಮೆಥಡ್; ಮಾಡೆಲ್, ವರ್ಷ, ಬಣ್ಣಗಳನ್ನು ಸ್ವೀಕರಿಸುತ್ತದೆ.', en: 'Constructor method initializing attributes.' },
      { line: 3, code: 'self.model = model', kn: 'ಮಾಡೆಲ್ ಹೆಸರನ್ನು ಆಬ್ಜೆಕ್ಟ್‌ನಲ್ಲಿ ಶೇಖರಿಸುತ್ತದೆ (ಉದಾ: Toyota).', en: 'Stores the model string inside the instance.' },
      { line: 4, code: 'self.year = year', kn: 'ತಯಾರಾದ ವರ್ಷವನ್ನು ಶೇಖರಿಸುತ್ತದೆ (ಉದಾ: 2024).', en: 'Stores the manufacturing year.' },
      { line: 5, code: 'self.color = color', kn: 'ಕಾರಿನ ಬಣ್ಣವನ್ನು ಶೇಖರಿಸುತ್ತದೆ (ಉದಾ: Red).', en: 'Stores the car color.' },
      { line: 6, code: 'def start(self) :', kn: 'ಕಾರನ್ನು ಪ್ರಾರಂಭಿಸುವ `start` ಮೆಥಡ್ ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ.', en: 'Defines start() method.' },
      { line: 7, code: 'print("Car Started")', kn: '"Car Started" ಸಂದೇಶವನ್ನು ಪ್ರಿಂಟ್ ಮಾಡುತ್ತದೆ.', en: 'Prints Car Started.' },
      { line: 8, code: 'def stop(self) :', kn: 'ಕಾರನ್ನು ನಿಲ್ಲಿಸುವ `stop` ಮೆಥಡ್ ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ.', en: 'Defines stop() method.' },
      { line: 9, code: 'print("Car Stopped")', kn: '"Car Stopped" ಸಂದೇಶವನ್ನು ಪ್ರಿಂಟ್ ಮಾಡುತ್ತದೆ.', en: 'Prints Car Stopped.' },
      { line: 10, code: 'def display(self) :', kn: 'ಕಾರಿನ ಎಲ್ಲಾ ವಿವರಗಳನ್ನು ಪ್ರದರ್ಶಿಸುವ ಮೆಥಡ್.', en: 'Defines display() method to show details.' },
      { line: 11, code: 'print("Model =", self.model)', kn: 'ಮಾಡೆಲ್ ಮೌಲ್ಯವನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ.', en: 'Prints the model attribute.' },
      { line: 12, code: 'print("Year =", self.year)', kn: 'ವರ್ಷದ ಮೌಲ್ಯವನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ.', en: 'Prints the year attribute.' },
      { line: 13, code: 'print("Color =", self.color)', kn: 'ಬಣ್ಣದ ಮೌಲ್ಯವನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ.', en: 'Prints the color attribute.' },
      { line: 14, code: 'c = Car("Toyota", 2024, "Red")', kn: '"Toyota", 2024, "Red" ಗುಣಗಳೊಂದಿಗೆ ಹೊಸ `c` ಕಾರು ಆಬ್ಜೆಕ್ಟ್ ನಿರ್ಮಿಸುತ್ತದೆ.', en: 'Instantiates object c with arguments "Toyota", 2024, "Red".' },
      { line: 15, code: 'c.start()', kn: 'ಕಾರಿನ `start()` ಮೆಥಡ್ ಕರೆಯುತ್ತದೆ -> "Car Started" ಬರುತ್ತದೆ.', en: 'Calls start method on object c.' },
      { line: 16, code: 'c.display()', kn: 'ಕಾರಿನ ವಿವರಗಳನ್ನು ತೋರಿಸುತ್ತದೆ.', en: 'Calls display method on object c.' },
      { line: 17, code: 'c.stop()', kn: 'ಕಾರನ್ನು ನಿಲ್ಲಿಸುತ್ತದೆ -> "Car Stopped" ಬರುತ್ತದೆ.', en: 'Calls stop method on object c.' }
    ],
    step6Predict: {
      prompt: {
        kn: 'ಕೋಡ್‌ನಲ್ಲಿ `c.start()`, ನಂತರ `c.display()`, ಕೊನೆಗೆ `c.stop()` ಕರೆಯಲಾಗಿದೆ. ಮೊದಲ ಸಾಲಿನಲ್ಲಿ ಏನು ಮುದ್ರಿತವಾಗುತ್ತದೆ?',
        en: 'The code calls c.start() first, then c.display(), and finally c.stop(). What will be the very first line of output?'
      },
      options: [
        {
          textKn: 'Car Started',
          textEn: 'Car Started',
          isCorrect: true,
          explanationKn: 'ಸರಿ! `c.start()` ಮೊದಲು ಕರೆಯಲ್ಪಟ್ಟಿರುವುದರಿಂದ "Car Started" ಮೊದಲು ಪ್ರಿಂಟ್ ಆಗುತ್ತದೆ.',
          explanationEn: 'Correct! c.start() is invoked first, printing "Car Started".'
        },
        {
          textKn: 'Model = Toyota',
          textEn: 'Model = Toyota',
          isCorrect: false,
          explanationKn: 'ಇಲ್ಲ, ಮಾಡೆಲ್ `c.display()` ಕರೆದಾಗ ಮಾತ್ರ ಪ್ರಿಂಟ್ ಆಗುತ್ತದೆ.',
          explanationEn: 'Incorrect, Model is printed inside display(), which runs after start().'
        },
        {
          textKn: 'Car Stopped',
          textEn: 'Car Stopped',
          isCorrect: false,
          explanationKn: 'ಇಲ್ಲ, `c.stop()` ಎಲ್ಲಕ್ಕಿಂತ ಕೊನೆಗೆ ಕರೆಯಲಾಗಿದೆ.',
          explanationEn: 'Incorrect, c.stop() is executed last.'
        }
      ]
    },
    step7Run: {
      expectedStdout: `Car Started
Model = Toyota
Year = 2024
Color = Red
Car Stopped`,
      isSimulation: true,
      simulationType: 'car'
    },
    step8Challenge: [
      {
        id: 'q1',
        questionKn: 'ಪೈಥಾನ್ ಕ್ಲಾಸ್‌ನಲ್ಲಿ ಹೊಸ ಆಬ್ಜೆಕ್ಟ್ ರಚಿಸಿದಾಗ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಕರೆಯಲ್ಪಡುವ ವಿಶೇಷ ವಿಧಾನ (Constructor) ಯಾವುದು?',
        questionEn: 'Which special constructor method is automatically called when a new object is created in Python?',
        options: [
          { textKn: '__init__', textEn: '__init__', isCorrect: true },
          { textKn: '__start__', textEn: '__start__', isCorrect: false },
          { textKn: '__main__', textEn: '__main__', isCorrect: false }
        ],
        hintKn: 'ಇದು "initialize" ಪದದ ಸಂಕ್ಷಿಪ್ತ ರೂಪ.',
        hintEn: 'Short for initialize with double underscores.',
        explanationKn: '`__init__` ಕನ್‌ಸ್ಟ್ರಕ್ಟರ್ ಆಬ್ಜೆಕ್ಟ್‌ನ ಗುಣಗಳನ್ನು ಆರಂಭಿಸಲು ಪೈಥಾನ್‌ನಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ.',
        explanationEn: '`__init__` is Python constructor method.'
      },
      {
        id: 'q2',
        questionKn: 'ಕ್ಲಾಸ್‌ನ ಮೆಥಡ್‌ಗಳಲ್ಲಿ ಪ್ರಸ್ತುತ ಆಬ್ಜೆಕ್ಟ್ ಅನ್ನು ಉಲ್ಲೇಖಿಸಲು ಯಾವ ಮೊದಲ ಪ್ಯಾರಾಮೀಟರ್ ಬಳಸಲಾಗುತ್ತದೆ?',
        questionEn: 'Which keyword is used as the first parameter inside class methods to reference the current object?',
        options: [
          { textKn: 'self', textEn: 'self', isCorrect: true },
          { textKn: 'this', textEn: 'this', isCorrect: false },
          { textKn: 'me', textEn: 'me', isCorrect: false }
        ],
        hintKn: 'ತನ್ನಷ್ಟಕ್ಕೆ ತಾನೇ ಎಂಬ ಅರ್ಥ ಕೊಡುವ ನಾಲ್ಕು ಅಕ್ಷರಗಳ ಇಂಗ್ಲಿಷ್ ಪದ.',
        hintEn: 'Refers to "oneself".',
        explanationKn: 'ಪೈಥಾನ್‌ನಲ್ಲಿ `self` ಪ್ರಸ್ತುತ ಆಬ್ಜೆಕ್ಟ್‌ನ ಆಟ್ರಿಬ್ಯೂಟ್ಸ್ ಪಡೆಯಲು ಅನಿವಾರ್ಯ.',
        explanationEn: 'Python explicitly passes `self` to access instance attributes.'
      }
    ],
    practiceMode: {
      cloze: {
        instructionKn: 'ಖಾಲಿ ಜಾಗಗಳಲ್ಲಿ ಸರಿಯಾದ OOP ಪದಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ:',
        instructionEn: 'Choose the correct OOP keywords to complete the code:',
        codeTemplate: `{{BLANK1}} Car :
    def {{BLANK2}}(self, model, year, color) :
        self.model = model
        self.year = year
        self.color = color
c = Car("Toyota", 2024, "Red")
c.{{BLANK3}}()`,
        blanks: [
          { id: 'BLANK1', answer: 'class', options: ['class', 'def', 'object', 'struct'] },
          { id: 'BLANK2', answer: '__init__', options: ['__init__', 'start', 'create', '__new__'] },
          { id: 'BLANK3', answer: 'start', options: ['start', 'run', 'drive', 'go'] }
        ]
      },
      termMatches: [
        { term: 'class', meaningKn: 'ಆಬ್ಜೆಕ್ಟ್ ನಿರ್ಮಿಸುವ ಬ್ಲೂಪ್ರಿಂಟ್', meaningEn: 'Blueprint for objects' },
        { term: '__init__', meaningKn: 'ಗುಣಲಕ್ಷಣ ಆರಂಭಿಸುವ ಕನ್‌ಸ್ಟ್ರಕ್ಟರ್', meaningEn: 'Initializer / Constructor' },
        { term: 'self', meaningKn: 'ಪ್ರಸ್ತುತ ಆಬ್ಜೆಕ್ಟ್ ಉಲ್ಲೇಖ', meaningEn: 'Instance reference' }
      ]
    },
    testMode: {
      questions: [
        {
          id: 'v1',
          questionKn: 'ಕ್ಲಾಸ್ (Class) ಮತ್ತು ಆಬ್ಜೆಕ್ಟ್ (Object) ನಡುವಿನ ವ್ಯತ್ಯಾಸವೇನು?',
          questionEn: 'What is the key difference between a Class and an Object?',
          options: [
            { textKn: 'ಕ್ಲಾಸ್ ಎನ್ನುವುದು ನೀಲನಕ್ಷೆ (Design), ಆಬ್ಜೆಕ್ಟ್ ಎನ್ನುವುದು ನೈಜ ಘಟಕ (Real machine)', textEn: 'Class is a blueprint/design, Object is the real instance', isCorrect: true },
            { textKn: 'ಆಬ್ಜೆಕ್ಟ್ ಕೇವಲ ಸಂಖ್ಯೆಗಳನ್ನು ಮಾತ್ರ ಶೇಖರಿಸುತ್ತದೆ', textEn: 'Object only stores numbers', isCorrect: false },
            { textKn: 'ಎರಡೂ ಒಂದೇ, ಯಾವುದೇ ವ್ಯತ್ಯಾಸವಿಲ್ಲ', textEn: 'Both are identical', isCorrect: false }
          ],
          explanationKn: 'ಕ್ಲಾಸ್ ಎಂದರೆ ಕಾರಿನ ಬ್ಲೂಪ್ರಿಂಟ್, ಆಬ್ಜೆಕ್ಟ್ ಎಂದರೆ ರಸ್ತೆಯಲ್ಲಿ ಓಡುವ ನೈಜ ಕಾರು!',
          explanationEn: 'A Class is the structural definition, while an Object is an instantiated instance.'
        },
        {
          id: 'v2',
          questionKn: 'ಈ ಪ್ರೋಗ್ರಾಂನಲ್ಲಿ `c.display()` ಚಲಾಯಿಸಿದಾಗ `Color` ಮೌಲ್ಯ ಏನೆಂದು ಪ್ರಿಂಟ್ ಆಗುತ್ತದೆ?',
          questionEn: 'In this exercise, what is the output for Color when c.display() is called?',
          options: [
            { textKn: 'Color = Red', textEn: 'Color = Red', isCorrect: true },
            { textKn: 'Color = Blue', textEn: 'Color = Blue', isCorrect: false },
            { textKn: 'Color = None', textEn: 'Color = None', isCorrect: false }
          ],
          explanationKn: 'ನಾವು `Car("Toyota", 2024, "Red")` ಎಂದು ರವಾನಿಸಿದ್ದೇವೆ, ಆದ್ದರಿಂದ `Color = Red` ಬರುತ್ತದೆ.',
          explanationEn: 'We passed "Red" as the color argument to Car.'
        }
      ]
    },
    teacherNotes: {
      observationKn: 'ಡಿಪ್ಲೋಮಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ `self` ಕಲ್ಪನೆ ಆರಂಭದಲ್ಲಿ ಗೊಂದಲ ಮೂಡಿಸುತ್ತದೆ. ಇದನ್ನು "ನನ್ನ ಕಾರು", "ನನ್ನ ಎಂಜಿನ್" ಎಂದು ಸರಳವಾಗಿ ಕನ್ನಡದಲ್ಲಿ ಹೋಲಿಸಿ ವಿವರಿಸಿ.',
      observationEn: 'Diploma mechanical students often find "self" abstract. Frame self as the specific machine identifier on the shopfloor.',
      labTipsKn: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ತಮ್ಮದೇ ನೆಚ್ಚಿನ ಕಾರು (ಉದಾ: "Mahindra Thar", 2023, "Black") ಹಾಕಿ ರನ್ ಮಾಡಲು ಪ್ರೇರೇಪಿಸಿ.',
      labTipsEn: 'Encourage students to modify arguments to their favorite cars like Thar or Scorpio to verify understanding.'
    }
  },

  // LEVEL 03
  {
    id: 3,
    exerciseNumber: 25,
    weekNumber: 7,
    weekTitle: {
      kn: 'ವಾರ 7: ಆಬ್ಜೆಕ್ಟ್-ಓರಿಯೆಂಟೆಡ್ ಪ್ರೋಗ್ರಾಮಿಂಗ್ (OOP)',
      en: 'Week 7: Object-Oriented Programming (Oop)'
    },
    title: {
      kn: 'ಲೆವೆಲ್ 03 – ಯಂತ್ರಗಳ ಕುಟುಂಬ (Family of Machines: Inheritance)',
      en: 'Level 03 – Family of Machines (Inheritance)'
    },
    subtitle: {
      kn: 'ಪೋಷಕ ವರ್ಗ (Animal) ಮತ್ತು ಉಪವರ್ಗಗಳು (Dog ಮತ್ತು Cat)',
      en: 'Inheritance with Base Class Animal and Derived Classes Dog and Cat'
    },
    badgeName: {
      kn: 'ಆನುವಂಶಿಕತೆ ಮಾಸ್ಟರ್ (Inheritance Master)',
      en: 'Inheritance Master'
    },
    badgeIcon: 'GitBranch',
    category: 'OOP',
    step1What: {
      description: {
        kn: 'ಈ ಹಂತದಲ್ಲಿ ನಾವು "ಇನ್‌ಹೆರಿಟೆನ್ಸ್" (Inheritance - ಆನುವಂಶಿಕತೆ) ಕಲಿಯುತ್ತೇವೆ. ಪೋಷಕ ಕ್ಲಾಸ್ `Animal` ನಲ್ಲಿರುವ `sound()` ವಿಧಾನವನ್ನು, ಮಗು ಕ್ಲಾಸ್‌ಗಳಾದ `Dog` ಮತ್ತು `Cat` ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಪಡೆದುಕೊಳ್ಳುತ್ತವೆ (ಉತ್ತರಾಧಿಕಾರ). ಜೊತೆಗೆ ತಮ್ಮದೇ ಆದ `bark()` ಮತ್ತು `meow()` ವಿಧಾನಗಳನ್ನು ಹೊಂದಿರುತ್ತವೆ.',
        en: 'In this level, we understand Inheritance. The base class Animal defines sound(). The child classes Dog and Cat inherit sound() from Animal and also define their own unique methods bark() and meow().'
      },
      keyPoints: [
        { kn: '`class Dog(Animal):` ಎಂದರೆ Dog ವರ್ಗವು Animal ನ ಗುಣಗಳನ್ನು ಪಡೆಯುತ್ತದೆ.', en: '`class Dog(Animal):` denotes Dog inherits from Animal.' },
        { kn: 'ಕೋಡ್ ಅನ್ನು ಮತ್ತೆ ಮತ್ತೆ ಬರೆಯದೇ ಮರುಬಳಕೆ (Code Reusability) ಮಾಡಲು ಇದು ಸಹಕಾರಿ.', en: 'Inheritance allows massive code reusability.' },
        { kn: '`d.sound()` ಕರೆದಾಗ ಪೋಷಕ ವರ್ಗದ ಕೋಡ್ ಚಾಲನೆಯಾಗುತ್ತದೆ.', en: 'Calling d.sound() executes inherited parent code.' }
      ]
    },
    step2Engineering: {
      title: {
        kn: 'ಮೆಕ್ಯಾನಿಕಲ್ ಟೂಲ್ ಕುಟುಂಬದ ಉದಾಹರಣೆ',
        en: 'Mechanical Tool Family Analogy'
      },
      analogy: {
        kn: 'ವರ್ಕ್‌ಶಾಪ್‌ನಲ್ಲಿ "CuttingTool" (ಕಟಿಂಗ್ ಟೂಲ್) ಎಂಬ ಮೂಲ ವರ್ಗವಿದೆ ಎಂದು ಭಾವಿಸಿ. ಎಲ್ಲಾ ಕಟಿಂಗ್ ಟೂಲ್‌ಗಳಿಗೂ ಶಾರ್ಪ್ ಎಡ್ಜ್ (Sharp Edge) ಮತ್ತು ಹ್ಯಾಂಡಲ್ ಇರುತ್ತದೆ. ಈಗ ಲೇತ್ ಟೂಲ್ (Lathe Tool) ಮತ್ತು ಮಿಲ್ಲಿಂಗ್ ಕಟ್ಟರ್ (Milling Cutter) ಆ ಮೂಲ ಗುಣಗಳನ್ನು ಪಡೆದುಕೊಂಡು, ತಮ್ಮದೇ ವಿಶೇಷ ಕಟಿಂಗ್ ಕೆಲಸ ಮಾಡುತ್ತವೆ! ಅದೇ ಇನ್‌ಹೆರಿಟೆನ್ಸ್!',
        en: 'Imagine a parent class "CuttingTool" in a manufacturing workshop. All cutting tools have a shank and cutting edge. Lathe Turning Tool and Milling Cutter both inherit these base physical properties while adding their specialized geometric motions!'
      },
      industryUseCase: {
        kn: 'ಕ್ಯಾಡ್ (CAD) ಸಾಫ್ಟ್‌ವೇರ್‌ನಲ್ಲಿ ಬೇಸ್ ಜ್ಯಾಮಿತಿ (Base Geometry) ಇಂದ ಬೋಲ್ಟ್, ಗೇರ್ ಮುಂತಾದ ಭಾಗಗಳ ವಿನ್ಯಾಸ ನಿರ್ಮಾಣ.',
        en: 'Standard Machine Component Hierarchies in CAD / CAM modeling software.'
      },
      icon: 'Share2'
    },
    step3Python: {
      title: {
        kn: 'ಇನ್‌ಹೆರಿಟೆನ್ಸ್‌ನ ಮುಖ್ಯ ಅಂಶಗಳು',
        en: 'Core Concepts of Inheritance'
      },
      summary: {
        kn: 'ಪೋಷಕ ವರ್ಗದ ಬ್ರಾಕೆಟ್‌ನಲ್ಲಿ ಹೆಸರು ಬರೆದರೆ (Parent Class) ಮಗು ಕ್ಲಾಸ್‌ಗೆ ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಸಿಗುತ್ತವೆ.',
        en: 'Passing parent class in parentheses gives the child class all parent methods.'
      },
      rules: [
        { kn: '1. `Base Class / Parent Class`: ಮೂಲ ಗುಣಲಕ್ಷಣಗಳನ್ನು ಹೊಂದಿರುವ ವರ್ಗ (`Animal`).', en: '1. Base Class: Parent providing shared functionality (`Animal`).' },
        { kn: '2. `Derived Class / Child Class`: ಪೋಷಕರಿಂದ ಗುಣ ಪಡೆಯುವ ಉಪವರ್ಗ (`Dog`, `Cat`).', en: '2. Derived Class: Child inheriting from parent (`Dog(Animal)`).' },
        { kn: '3. `d = Dog()`: ಮಗು ವರ್ಗದ ಆಬ್ಜೆಕ್ಟ್ ರಚನೆ.', en: '3. Creating an instance of derived class.' },
        { kn: '4. ಮಗು ವರ್ಗವು ಪೋಷಕರ `sound()` ಮತ್ತು ತನ್ನದೇ `bark()` ಎರಡನ್ನೂ ಕರೆಯಬಲ್ಲದು.', en: '4. Child can call both inherited and its own specialized methods.' }
      ],
      terms: [
        { term: 'Base Class (ಪೋಷಕ ವರ್ಗ)', meaningKn: 'ಮೂಲ ಪೋಷಕ ಕ್ಲಾಸ್', meaningEn: 'Parent class being inherited from' },
        { term: 'Derived Class (ಉಪವರ್ಗ)', meaningKn: 'ಗುಣಗಳನ್ನು ಪಡೆದ ಮಗು ಕ್ಲಾಸ್', meaningEn: 'Child class inheriting features' },
        { term: 'Code Reusability (ಮರುಬಳಕೆ)', meaningKn: 'ಕೋಡ್ ಮತ್ತೆ ಬರೆಯದೇ ಬಳಸುವ ಕೌಶಲ', meaningEn: 'Reusing existing verified code' }
      ]
    },
    step4Code: {
      originalCode: `class Animal :
def sound(self) :
print("Animal makes sound")
class Dog(Animal) :
def bark(self) :
print("Dog barks")
class Cat(Animal) :
def meow(self) :
print("Cat meows")
d = Dog()
d.sound()
d.bark()
c = Cat()
c.sound()
c.meow()`
    },
    step5LineByLine: [
      { line: 1, code: 'class Animal :', kn: 'ಮೂಲ ಪೋಷಕ ವರ್ಗ `Animal` ಅನ್ನು ಸೃಷ್ಟಿಸುತ್ತದೆ.', en: 'Defines base class Animal.' },
      { line: 2, code: 'def sound(self) :', kn: 'ಎಲ್ಲಾ ಪ್ರಾಣಿಗಳಿಗೆ ಸಾಮಾನ್ಯವಾದ `sound` ವಿಧಾನವನ್ನು ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ.', en: 'Defines sound() method in Animal.' },
      { line: 3, code: 'print("Animal makes sound")', kn: '"Animal makes sound" ಎಂದು ಮುದ್ರಿಸುತ್ತದೆ.', en: 'Prints Animal makes sound.' },
      { line: 4, code: 'class Dog(Animal) :', kn: '`Animal` ನಿಂದ ಗುಣಗಳನ್ನು ಪಡೆದು `Dog` ಉಪವರ್ಗವನ್ನು ರಚಿಸುತ್ತದೆ.', en: 'Dog inherits from Animal.' },
      { line: 5, code: 'def bark(self) :', kn: 'ನಾಯಿಗೆ ವಿಶಿಷ್ಟವಾದ `bark()` ಮೆಥಡ್ ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ.', en: 'Defines bark() method in Dog.' },
      { line: 6, code: 'print("Dog barks")', kn: '"Dog barks" ಎಂದು ಮುದ್ರಿಸುತ್ತದೆ.', en: 'Prints Dog barks.' },
      { line: 7, code: 'class Cat(Animal) :', kn: '`Animal` ನಿಂದ ಗುಣಗಳನ್ನು ಪಡೆದು `Cat` ಉಪವರ್ಗ ರಚಿಸುತ್ತದೆ.', en: 'Cat inherits from Animal.' },
      { line: 8, code: 'def meow(self) :', kn: 'ಬೆಕ್ಕಿಗೆ ವಿಶಿಷ್ಟವಾದ `meow()` ಮೆಥಡ್ ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ.', en: 'Defines meow() method in Cat.' },
      { line: 9, code: 'print("Cat meows")', kn: '"Cat meows" ಎಂದು ಮುದ್ರಿಸುತ್ತದೆ.', en: 'Prints Cat meows.' },
      { line: 10, code: 'd = Dog()', kn: '`Dog` ಕ್ಲಾಸ್‌ನ ಆಬ್ಜೆಕ್ಟ್ `d` ಅನ್ನು ರಚಿಸುತ್ತದೆ.', en: 'Instantiates Dog object d.' },
      { line: 11, code: 'd.sound()', kn: 'ಪೋಷಕ `Animal` ನಿಂದ ಪಡೆದ `sound()` ಮೆಥಡ್ ಕರೆಯುತ್ತದೆ.', en: 'Calls inherited sound() on Dog.' },
      { line: 12, code: 'd.bark()', kn: '`Dog` ನ ತನ್ನದೇ `bark()` ಮೆಥಡ್ ಕರೆಯುತ್ತದೆ.', en: 'Calls bark() on Dog.' },
      { line: 13, code: 'c = Cat()', kn: '`Cat` ಕ್ಲಾಸ್‌ನ ಆಬ್ಜೆಕ್ಟ್ `c` ಅನ್ನು ರಚಿಸುತ್ತದೆ.', en: 'Instantiates Cat object c.' },
      { line: 14, code: 'c.sound()', kn: 'ಪೋಷಕ `Animal` ನಿಂದ ಪಡೆದ `sound()` ಮೆಥಡ್ ಕರೆಯುತ್ತದೆ.', en: 'Calls inherited sound() on Cat.' },
      { line: 15, code: 'c.meow()', kn: '`Cat` ನ ತನ್ನದೇ `meow()` ಮೆಥಡ್ ಕರೆಯುತ್ತದೆ.', en: 'Calls meow() on Cat.' }
    ],
    step6Predict: {
      prompt: {
        kn: '`d.sound()` ನಂತರ `d.bark()` ಕರೆದರೆ, ಔಟ್‌ಪುಟ್‌ನ ಮೊದಲ 2 ಸಾಲುಗಳು ಏನಿರುತ್ತವೆ?',
        en: 'When d.sound() followed by d.bark() are called, what will be the first two lines of output?'
      },
      options: [
        {
          textKn: 'Animal makes sound, ನಂತರ Dog barks',
          textEn: 'Animal makes sound, followed by Dog barks',
          isCorrect: true,
          explanationKn: 'ಸರಿಯಾದ ಉತ್ತರ! `d` ನಾಯಿಯಾದರೂ ಪೋಷಕ Animal ನ `sound` ಅನ್ನು ಮೊದಲು ಚಲಾಯಿಸುತ್ತದೆ.',
          explanationEn: 'Correct! d inherits sound() from Animal first, then invokes bark().'
        },
        {
          textKn: 'Dog barks, ನಂತರ Animal makes sound',
          textEn: 'Dog barks, followed by Animal makes sound',
          isCorrect: false,
          explanationKn: 'ತಪ್ಪು, ಕೋಡ್‌ನಲ್ಲಿ ಮೊದಲು `d.sound()` ಕರೆದ ನಂತರ `d.bark()` ಕರೆಯಲಾಗಿದೆ.',
          explanationEn: 'Incorrect order; sound() is called before bark().'
        },
        {
          textKn: 'Cat meows, ನಂತರ Dog barks',
          textEn: 'Cat meows, followed by Dog barks',
          isCorrect: false,
          explanationKn: 'ತಪ್ಪು, ಬೆಕ್ಕಿನ ಮೆಥಡ್‌ಗಳು ನಾಯಿಯ ಆಬ್ಜೆಕ್ಟ್‌ಗೆ ಸಂಬಂಧಿಸಿಲ್ಲ.',
          explanationEn: 'Incorrect, Cat methods belong to Cat instances.'
        }
      ]
    },
    step7Run: {
      expectedStdout: `Animal makes sound
Dog barks
Animal makes sound
Cat meows`,
      isSimulation: true,
      simulationType: 'inheritance'
    },
    step8Challenge: [
      {
        id: 'q1',
        questionKn: 'ಪೈಥಾನ್‌ನಲ್ಲಿ ಮಗು ಕ್ಲಾಸ್ ಪೋಷಕ ಕ್ಲಾಸ್‌ನಿಂದ ಆನುವಂಶಿಕತೆ ಪಡೆಯುವುದನ್ನು ಹೇಗೆ ಸೂಚಿಸುತ್ತೇವೆ?',
        questionEn: 'How do we declare that Dog inherits from Animal in Python syntax?',
        options: [
          { textKn: 'class Dog(Animal) :', textEn: 'class Dog(Animal) :', isCorrect: true },
          { textKn: 'class Dog extends Animal :', textEn: 'class Dog extends Animal :', isCorrect: false },
          { textKn: 'class Dog inherits Animal :', textEn: 'class Dog inherits Animal :', isCorrect: false }
        ],
        hintKn: 'ಪೋಷಕ ವರ್ಗವನ್ನು ಆವರಣ ಚಿಹ್ನೆಯಲ್ಲಿ (parentheses) ಬರೆಯಲಾಗುತ್ತದೆ.',
        hintEn: 'Parent class is enclosed in parentheses.',
        explanationKn: 'ಪೈಥಾನ್‌ನಲ್ಲಿ `class Child(Parent):` ಎಂಬ ಸಿಂಟ್ಯಾಕ್ಸ್ ಬಳಸಲಾಗುತ್ತದೆ.',
        explanationEn: 'Python uses parentheses class Child(Parent): for inheritance.'
      },
      {
        id: 'q2',
        questionKn: 'ಇನ್‌ಹೆರಿಟೆನ್ಸ್‌ನಿಂದ ಪ್ರೋಗ್ರಾಮರ್‌ಗೆ ಸಿಗುವ ಪ್ರಮುಖ ಪ್ರಯೋಜನವೇನು?',
        questionEn: 'What is the primary engineering benefit of inheritance?',
        options: [
          { textKn: 'ಕೋಡ್ ಮರುಬಳಕೆ (Code Reusability)', textEn: 'Code Reusability', isCorrect: true },
          { textKn: 'ಕಂಪ್ಯೂಟರ್ ತೂಕ ಕಡಿಮೆಯಾಗುವುದು', textEn: 'Hardware weight reduction', isCorrect: false },
          { textKn: 'ಇಂಟರ್ನೆಟ್ ವೇಗ ಹೆಚ್ಚಾಗುವುದು', textEn: 'Faster internet speed', isCorrect: false }
        ],
        hintKn: 'ಒಮ್ಮೆ ಬರೆದ ಕೋಡ್ ಮತ್ತೆ ಮತ್ತೆ ಬರೆಯುವ ಶ್ರಮ ತಪ್ಪುತ್ತದೆ.',
        hintEn: 'Reusing existing code without duplicating it.',
        explanationKn: 'ಮೂಲ ಕೋಡ್ ಅನ್ನು ಮತ್ತೆ ಮತ್ತೆ ಬರೆಯದೇ ಹೊಸ ಕ್ಲಾಸ್‌ಗಳಲ್ಲಿ ಮರುಬಳಕೆ ಮಾಡಬಹುದು.',
        explanationEn: 'Inheritance prevents repetition by reusing parent logic.'
      }
    ],
    practiceMode: {
      cloze: {
        instructionKn: 'ಇನ್‌ಹೆರಿಟೆನ್ಸ್ ಸಿಂಟ್ಯಾಕ್ಸ್ ಪೂರ್ಣಗೊಳಿಸಿ:',
        instructionEn: 'Complete the Python inheritance syntax:',
        codeTemplate: `class Animal :
    def sound(self) :
        print("Animal makes sound")
class Dog({{BLANK1}}) :
    def bark(self) :
        print("Dog barks")
d = {{BLANK2}}()
d.{{BLANK3}}()`,
        blanks: [
          { id: 'BLANK1', answer: 'Animal', options: ['Animal', 'Dog', 'object', 'Parent'] },
          { id: 'BLANK2', answer: 'Dog', options: ['Dog', 'Animal', 'Cat', 'Pet'] },
          { id: 'BLANK3', answer: 'sound', options: ['sound', 'bark', 'run', 'walk'] }
        ]
      },
      termMatches: [
        { term: 'Inheritance', meaningKn: 'ಪೋಷಕ ಕ್ಲಾಸ್‌ನಿಂದ ಗುಣಗಳನ್ನು ಪಡೆಯುವುದು', meaningEn: 'Deriving features from parent class' },
        { term: 'Base Class', meaningKn: 'ಮೂಲ ಪೋಷಕ ವರ್ಗ (Animal)', meaningEn: 'Parent class' },
        { term: 'Derived Class', meaningKn: 'ಉಪವರ್ಗ (Dog, Cat)', meaningEn: 'Child class' }
      ]
    },
    testMode: {
      questions: [
        {
          id: 'v1',
          questionKn: '`Dog` ಕ್ಲಾಸ್‌ನಲ್ಲಿ `sound()` ಮೆಥಡ್ ಬರೆಯದಿದ್ದರೂ `d.sound()` ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ?',
          questionEn: 'Why does d.sound() work even though sound() is not defined inside class Dog?',
          options: [
            { textKn: 'ಏಕೆಂದರೆ Dog ವರ್ಗವು Animal ನಿಂದ sound() ಅನ್ನು ಆನುವಂಶಿಕವಾಗಿ ಪಡೆದಿದೆ', textEn: 'Because Dog inherited sound() from parent Animal', isCorrect: true },
            { textKn: 'ಪೈಥಾನ್ ಕಾಗುಣಿತ ತಪ್ಪು ಎಂದು ನಿರ್ಲಕ್ಷಿಸುತ್ತದೆ', textEn: 'Python ignores errors', isCorrect: false },
            { textKn: 'ಇದು ಕೇವಲ ಅದೃಷ್ಟವಶಾತ್ ಕೆಲಸ ಮಾಡುತ್ತದೆ', textEn: 'It works by coincidence', isCorrect: false }
          ],
          explanationKn: 'Dog ವರ್ಗವು Animal ನ ಉಪವರ್ಗವಾಗಿರುವುದರಿಂದ, Animal ನ ಎಲ್ಲಾ ಮೆಥಡ್‌ಗಳು ನಾಯಿಗೆ ಲಭ್ಯವಿರುತ್ತವೆ.',
          explanationEn: 'Because of inheritance, public methods of Animal are accessible to Dog.'
        }
      ]
    },
    teacherNotes: {
      observationKn: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಜಾವಾ (Java) ದ "extends" ಕೀವರ್ಡ್ ನೆನಪಿದ್ದರೆ ಗೊಂದಲವಾಗಬಹುದು. ಪೈಥಾನ್‌ನಲ್ಲಿ ಕೇವಲ ಆವರಣದಲ್ಲಿ `class Dog(Animal):` ಎಂದು ಬರೆಯುತ್ತೇವೆ ಎಂದು ಸ್ಪಷ್ಟಪಡಿಸಿ.',
      observationEn: 'Clarify to students transitioning from C++ or Java that Python uses clean parenthetical inheritance syntax.',
      labTipsKn: 'ಮ್ಯಾನುಯಲ್‌ನ ಎಕ್ಸರ್‌ಸೈಜ್ 25 ರ ಮೂಲ ಕೋಡ್ ಅಕ್ಷರಶಃ Animal, Dog, Cat ಆಗಿದೆ. ಇದನ್ನು ಯಾವುದೇ ಬದಲಾವಣೆ ಇಲ್ಲದೆ ಅನುಸರಿಸಲಾಗಿದೆ.',
      labTipsEn: 'Adheres exactly to Exercise No. 25 code in the manual.'
    }
  },

  // LEVEL 04
  {
    id: 4,
    exerciseNumber: 27,
    weekNumber: 7,
    weekTitle: {
      kn: 'ವಾರ 7: ಆಬ್ಜೆಕ್ಟ್-ಓರಿಯೆಂಟೆಡ್ ಪ್ರೋಗ್ರಾಮಿಂಗ್ (OOP)',
      en: 'Week 7: Object-Oriented Programming (Oop)'
    },
    title: {
      kn: 'ಲೆವೆಲ್ 04 – ಬ್ಯಾಂಕ್ ಮ್ಯಾನೇಜರ್ ಚಾಲೆಂಜ್ (Bank Manager Challenge)',
      en: 'Level 04 – Bank Manager Challenge'
    },
    subtitle: {
      kn: 'ಡೆಪಾಸಿಟ್, ವಿತ್‌ಡ್ರಾ ಮತ್ತು ಬ್ಯಾಲೆನ್ಸ್ ವಿಚಾರಣೆ',
      en: 'Bank Class Supporting Deposit, Withdrawal and Balance Inquiry'
    },
    badgeName: {
      kn: 'ಅಕೌಂಟ್ಸ್ ಇಂಜಿನಿಯರ್ (Accounts Engineer)',
      en: 'Accounts Engineer'
    },
    badgeIcon: 'Landmark',
    category: 'OOP',
    step1What: {
      description: {
        kn: 'ಈ ಪ್ರೋಗ್ರಾಂನಲ್ಲಿ ನಾವು `Bank` ಎಂಬ ಕ್ಲಾಸ್ ರಚಿಸುತ್ತೇವೆ. ಖಾತೆಯಲ್ಲಿ ಆರಂಭಿಕ ಬ್ಯಾಲೆನ್ಸ್ 1000 ಇರುತ್ತದೆ. ₹500 ಡೆಪಾಸಿಟ್ ಮಾಡಿದಾಗ ಬ್ಯಾಲೆನ್ಸ್ ಹೆಚ್ಚಾಗುತ್ತದೆ ಮತ್ತು ₹200 ವಿತ್‌ಡ್ರಾ ಮಾಡಿದಾಗ ಬ್ಯಾಲೆನ್ಸ್ ಕಡಿಮೆಯಾಗುತ್ತದೆ. ಪ್ರತಿ ಹಂತದಲ್ಲೂ ಬ್ಯಾಲೆನ್ಸ್ ಅನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತೇವೆ.',
        en: 'We build a Bank class with initial balance 1000. It demonstrates state modification through deposit (+500) and withdraw (-200) methods, printing updated balance along the way.'
      },
      keyPoints: [
        { kn: '`self.balance = 1000`: ಆರಂಭಿಕ ಖಾತೆಯ ಹಣ.', en: 'Initial opening balance is 1000.' },
        { kn: '`deposit`: `self.balance = self.balance + 500` (ಹಣ ಜಮೆ).', en: 'Deposit adds 500 to current balance.' },
        { kn: '`withdraw`: `self.balance = self.balance - 200` (ಹಣ ಹಿಂಪಡೆಯುವಿಕೆ).', en: 'Withdraw subtracts 200 from balance.' }
      ]
    },
    step2Engineering: {
      title: {
        kn: 'ಮೆಕ್ಯಾನಿಕಲ್ ಶಾಪ್‌ಫ್ಲೋರ್ ಇನ್ವೆಂಟರಿ ಅನ್ವಯ',
        en: 'Mechanical Workshop Inventory Analogy'
      },
      analogy: {
        kn: 'ವರ್ಕ್‌ಶಾಪ್‌ನ ಟೂಲ್ ರೂಂನಲ್ಲಿ 1000 ಹೆಕ್ಸ್ ನಟ್‌ಗಳು (Hex Nuts) ಇವೆ ಎಂದು ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ. ಹೊಸದಾಗಿ 500 ನಟ್‌ಗಳು ಬಂದಾಗ ಸ್ಟಾಕ್ ಹೆಚ್ಚಾಗುತ್ತದೆ (1000 + 500 = 1500). ಅಸೆಂಬ್ಲಿ ಲೈನ್‌ಗೆ 200 ನಟ್‌ಗಳನ್ನು ನೀಡಿದಾಗ ಸ್ಟಾಕ್ ಕಡಿಮೆಯಾಗುತ್ತದೆ (1500 - 200 = 1300). ಬ್ಯಾಂಕ್ ಪ್ರೋಗ್ರಾಂ ಸಹ ಇದೇ ರೀತಿ ರಿಸೋರ್ಸ್ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್ ಮಾಡುತ್ತದೆ!',
        en: 'In a factory tool crib, there are 1000 hex bolts. When a supplier batch of 500 arrives, inventory increases to 1500 (Deposit). When the assembly conveyor pulls 200 bolts, stock drops to 1300 (Withdrawal). The Bank class models stateful inventory tracking!'
      },
      industryUseCase: {
        kn: 'ಕಾರ್ಖಾನೆಯ ಬಿಲ್ ಆಫ್ ಮೆಟೀರಿಯಲ್ಸ್ (BOM) ಮತ್ತು ದಾಸ್ತಾನು (Inventory) ನಿರ್ವಹಣಾ ಸಾಫ್ಟ್‌ವೇರ್.',
        en: 'Automated Workshop Material Resource Planning (MRP) & Inventory.'
      },
      icon: 'Coins'
    },
    step3Python: {
      title: {
        kn: 'ಆಬ್ಜೆಕ್ಟ್ ಸ್ಟೇಟ್ (State) ಬದಲಾವಣೆ',
        en: 'Modifying Object State'
      },
      summary: {
        kn: 'ಆಬ್ಜೆಕ್ಟ್‌ನೊಳಗಿನ ವೇರಿಯಬಲ್‌ಗಳು (Attributes) ಮೆಥಡ್‌ಗಳನ್ನು ಕರೆದಾಗ ಹೇಗೆ ಬದಲಾಗುತ್ತವೆ ಎಂಬುದನ್ನು ಇದು ತೋರಿಸುತ್ತದೆ.',
        en: 'Demonstrates how instance variables mutate when methods are executed.'
      },
      rules: [
        { kn: '1. `__init__` ನಲ್ಲಿ ಆರಂಭಿಕ ಮೌಲ್ಯ 1000 ಸೆಟ್ ಆಗುತ್ತದೆ.', en: '1. Constructor initializes balance to 1000.' },
        { kn: '2. `b.deposit()` ಕರೆದಾಗ ಬ್ಯಾಲೆನ್ಸ್ 1500 ಆಗುತ್ತದೆ.', en: '2. deposit() updates balance to 1500.' },
        { kn: '3. `b.withdraw()` ಕರೆದಾಗ 1500 ರಿಂದ 200 ಕಳೆದು 1300 ಆಗುತ್ತದೆ.', en: '3. withdraw() reduces balance from 1500 to 1300.' },
        { kn: '4. `b.display()` ಪ್ರತಿ ಬಾರಿಯೂ ಪ್ರಸ್ತುತ ಉಳಿದಿರುವ ಬ್ಯಾಲೆನ್ಸ್ ಪ್ರಿಂಟ್ ಮಾಡುತ್ತದೆ.', en: '4. display() prints the current balance.' }
      ],
      terms: [
        { term: 'Constructor', meaningKn: 'ಆರಂಭಿಕ ಬ್ಯಾಲೆನ್ಸ್ ಸ್ಥಾಪಿಸುವ ವಿಧಾನ', meaningEn: 'Initializes state at object creation' },
        { term: 'State Modification', meaningKn: 'ಆಬ್ಜೆಕ್ಟ್‌ನ ಡೇಟಾ ಬದಲಾಗುವುದು', meaningEn: 'Altering stored attribute value' },
        { term: 'Balance', meaningKn: 'ಖಾತೆಯಲ್ಲಿ ಉಳಿದಿರುವ ಮೊತ್ತ', meaningEn: 'Remaining quantity / account funds' }
      ]
    },
    step4Code: {
      originalCode: `class Bank :
def __init__(self) :
self.balance = 1000
def deposit(self) :
self.balance = self.balance + 500
def withdraw(self) :
self.balance = self.balance - 200
def display(self) :
print("Balance =", self.balance)
b = Bank()
b.deposit()
b.display()
b.withdraw()
b.display()`
    },
    step5LineByLine: [
      { line: 1, code: 'class Bank :', kn: '`Bank` ಎಂಬ ಹೊಸ ಕ್ಲಾಸ್ ವ್ಯಾಖ್ಯಾನಿಸುತ್ತದೆ.', en: 'Defines Bank class.' },
      { line: 2, code: 'def __init__(self) :', kn: 'ಖಾತೆ ತೆರೆದಾಗ ಕರೆಯಲ್ಪಡುವ ಕನ್‌ಸ್ಟ್ರಕ್ಟರ್.', en: 'Constructor initializing new account.' },
      { line: 3, code: 'self.balance = 1000', kn: 'ಆರಂಭಿಕ ಬ್ಯಾಲೆನ್ಸ್ ಅನ್ನು ₹1000 ಎಂದು ನಿಗದಿಪಡಿಸುತ್ತದೆ.', en: 'Sets initial balance to 1000.' },
      { line: 4, code: 'def deposit(self) :', kn: 'ಹಣ ಜಮಾ ಮಾಡುವ `deposit` ಮೆಥಡ್.', en: 'Defines deposit() method.' },
      { line: 5, code: 'self.balance = self.balance + 500', kn: 'ಹಾಲಿ ಬ್ಯಾಲೆನ್ಸ್‌ಗೆ ₹500 ಕೂಡಿಸುತ್ತದೆ.', en: 'Adds 500 to existing balance.' },
      { line: 6, code: 'def withdraw(self) :', kn: 'ಹಣ ಹಿಂಪಡೆಯುವ `withdraw` ಮೆಥಡ್.', en: 'Defines withdraw() method.' },
      { line: 7, code: 'self.balance = self.balance - 200', kn: 'ಹಾಲಿ ಬ್ಯಾಲೆನ್ಸ್‌ನಿಂದ ₹200 ಕಳೆಯುತ್ತದೆ.', en: 'Deducts 200 from balance.' },
      { line: 8, code: 'def display(self) :', kn: 'ಪ್ರಸ್ತುತ ಬ್ಯಾಲೆನ್ಸ್ ಪ್ರದರ್ಶಿಸುವ ಮೆಥಡ್.', en: 'Defines display() method.' },
      { line: 9, code: 'print("Balance =", self.balance)', kn: '"Balance = [ಮೌಲ್ಯ]" ಎಂದು ಪ್ರಿಂಟ್ ಮಾಡುತ್ತದೆ.', en: 'Prints current balance.' },
      { line: 10, code: 'b = Bank()', kn: '`Bank` ಆಬ್ಜೆಕ್ಟ್ `b` ಅನ್ನು ರಚಿಸುತ್ತದೆ (ಬ್ಯಾಲೆನ್ಸ್ = 1000).', en: 'Instantiates Bank object b.' },
      { line: 11, code: 'b.deposit()', kn: '500 ಜಮೆಯಾಗುತ್ತದೆ -> ಬ್ಯಾಲೆನ್ಸ್ 1500 ಆಗುತ್ತದೆ.', en: 'Calls deposit() -> balance becomes 1500.' },
      { line: 12, code: 'b.display()', kn: 'ಬ್ಯಾಲೆನ್ಸ್ ಪ್ರದರ್ಶಿಸುತ್ತದೆ -> Balance = 1500.', en: 'Calls display() -> prints Balance = 1500.' },
      { line: 13, code: 'b.withdraw()', kn: '200 ಕಳೆಯುತ್ತದೆ -> ಬ್ಯಾಲೆನ್ಸ್ 1300 ಆಗುತ್ತದೆ.', en: 'Calls withdraw() -> balance becomes 1300.' },
      { line: 14, code: 'b.display()', kn: 'ಬ್ಯಾಲೆನ್ಸ್ ಪ್ರದರ್ಶಿಸುತ್ತದೆ -> Balance = 1300.', en: 'Calls display() -> prints Balance = 1300.' }
    ],
    step6Predict: {
      prompt: {
        kn: 'ಮೊದಲು 1000 ಇತ್ತು. 500 ಜಮೆ ಮಾಡಿ ನಂತರ 200 ವಿತ್‌ಡ್ರಾ ಮಾಡಿದ ನಂತರ ಕೊನೆಯದಾಗಿ ಪ್ರಿಂಟ್ ಆಗುವ ಬ್ಯಾಲೆನ್ಸ್ ಎಷ್ಟು?',
        en: 'Initial balance was 1000. After adding 500 and subtracting 200, what will be the final printed Balance?'
      },
      options: [
        {
          textKn: 'Balance = 1300',
          textEn: 'Balance = 1300',
          isCorrect: true,
          explanationKn: 'ಸರಿಯಾಗಿದೆ! 1000 + 500 = 1500; ನಂತರ 1500 - 200 = 1300.',
          explanationEn: 'Correct! 1000 + 500 = 1500, then 1500 - 200 = 1300.'
        },
        {
          textKn: 'Balance = 1500',
          textEn: 'Balance = 1500',
          isCorrect: false,
          explanationKn: 'ಇದು ವಿತ್‌ಡ್ರಾ ಮಾಡುವ ಮುಂಚಿನ ಬ್ಯಾಲೆನ್ಸ್ ಆಗಿರುತ್ತದೆ.',
          explanationEn: 'That is the balance before withdrawal.'
        },
        {
          textKn: 'Balance = 1000',
          textEn: 'Balance = 1000',
          isCorrect: false,
          explanationKn: 'ತಪ್ಪು, ಜಮೆ ಮತ್ತು ವಿತ್‌ಡ್ರಾ ಎರಡೂ ನಡೆದಿವೆ.',
          explanationEn: 'Incorrect, balance has been modified.'
        }
      ]
    },
    step7Run: {
      expectedStdout: `Balance = 1500
Balance = 1300`,
      isSimulation: true,
      simulationType: 'bank'
    },
    step8Challenge: [
      {
        id: 'q1',
        questionKn: 'ಈ ಪ್ರೋಗ್ರಾಂನಲ್ಲಿ ಆರಂಭಿಕ ಬ್ಯಾಲೆನ್ಸ್ (Initial Balance) ಎಷ್ಟು ನಿಗದಿಪಡಿಸಲಾಗಿದೆ?',
        questionEn: 'What is the initial opening balance set inside the Bank class __init__?',
        options: [
          { textKn: '1000', textEn: '1000', isCorrect: true },
          { textKn: '500', textEn: '500', isCorrect: false },
          { textKn: '0', textEn: '0', isCorrect: false }
        ],
        hintKn: '`self.balance = 1000` ಸಾಲು ನೋಡಿ.',
        hintEn: 'Look at line 3 of the program.',
        explanationKn: '`self.balance = 1000` ಎಂದು ಕನ್‌ಸ್ಟ್ರಕ್ಟರ್‌ನಲ್ಲಿ ನಿಗದಿಪಡಿಸಲಾಗಿದೆ.',
        explanationEn: 'The initial balance is set to 1000 in __init__.'
      },
      {
        id: 'q2',
        questionKn: '`b.withdraw()` ಕರೆಯುವುದರಿಂದ ಬ್ಯಾಲೆನ್ಸ್‌ಗೆ ಏನಾಗುತ್ತದೆ?',
        questionEn: 'What mathematical operation occurs when b.withdraw() is invoked?',
        options: [
          { textKn: '200 ಕಳೆಯಲ್ಪಡುತ್ತದೆ (Subtracted)', textEn: '200 is subtracted', isCorrect: true },
          { textKn: '200 ಕೂಡಿಸಲಾಗುತ್ತದೆ (Added)', textEn: '200 is added', isCorrect: false },
          { textKn: 'ಬ್ಯಾಲೆನ್ಸ್ ಸೊನ್ನೆಯಾಗುತ್ತದೆ', textEn: 'Balance resets to zero', isCorrect: false }
        ],
        hintKn: '`self.balance - 200` ಸೂತ್ರವನ್ನು ಗಮನಿಸಿ.',
        hintEn: 'Withdrawal deducts money.',
        explanationKn: '`self.balance - 200` ಕಾರ್ಯಾಚರಣೆ ನಡೆಯುತ್ತದೆ.',
        explanationEn: '200 is subtracted from the balance.'
      }
    ],
    practiceMode: {
      cloze: {
        instructionKn: 'ಬ್ಯಾಂಕ್ ಕ್ಲಾಸ್ ಮೆಥಡ್‌ಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ:',
        instructionEn: 'Complete the Bank class methods:',
        codeTemplate: `class Bank :
    def __init__(self) :
        self.balance = 1000
    def deposit(self) :
        self.balance = self.balance {{BLANK1}} 500
    def withdraw(self) :
        self.balance = self.balance {{BLANK2}} 200
    def display(self) :
        print("Balance =", self.{{BLANK3}})`,
        blanks: [
          { id: 'BLANK1', answer: '+', options: ['+', '-', '*', '/'] },
          { id: 'BLANK2', answer: '-', options: ['-', '+', '%', '//'] },
          { id: 'BLANK3', answer: 'balance', options: ['balance', 'money', 'cash', 'account'] }
        ]
      },
      termMatches: [
        { term: 'deposit()', meaningKn: 'ಹಣ ಸೇರ್ಪಡೆ (+500)', meaningEn: 'Add funds' },
        { term: 'withdraw()', meaningKn: 'ಹಣ ಕಡಿತ (-200)', meaningEn: 'Deduct funds' },
        { term: 'display()', meaningKn: 'ಹಾಲಿ ಬ್ಯಾಲೆನ್ಸ್ ತೋರಿಸುವುದು', meaningEn: 'Show balance' }
      ]
    },
    testMode: {
      questions: [
        {
          id: 'v1',
          questionKn: 'ಮ್ಯಾನುಯಲ್‌ನ ಪ್ರಕಾರ Ex No: 27 ನಲ್ಲಿ ಮೊದಲ ಮತ್ತು ಎರಡನೇ `display()` ಫಲಿತಾಂಶಗಳು ಯಾವುವು?',
          questionEn: 'What are the two outputs produced by the two display() calls in Ex. No: 27?',
          options: [
            { textKn: 'Balance = 1500 ಮತ್ತು Balance = 1300', textEn: 'Balance = 1500 and Balance = 1300', isCorrect: true },
            { textKn: 'Balance = 1000 ಮತ್ತು Balance = 1500', textEn: 'Balance = 1000 and Balance = 1500', isCorrect: false },
            { textKn: 'Balance = 1300 ಮತ್ತು Balance = 1300', textEn: 'Balance = 1300 and Balance = 1300', isCorrect: false }
          ],
          explanationKn: 'ಮೊದಲು 500 ಜಮೆಯಾದ ನಂತರ 1500, ನಂತರ 200 ತೆಗೆದ ನಂತರ 1300 ಪ್ರದರ್ಶಿತವಾಗುತ್ತದೆ.',
          explanationEn: 'First call shows 1500 after deposit; second call shows 1300 after withdrawal.'
        }
      ]
    },
    teacherNotes: {
      observationKn: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ವೇರಿಯಬಲ್‌ನ ಹಿಂದಿನ ಮೌಲ್ಯ ಹೇಗೆ ಅಪ್‌ಡೇಟ್ ಆಗುತ್ತದೆ (Reassignment) ಎಂಬುದನ್ನು ತಿಳಿಯಲು ಇದು ಅತ್ಯುತ್ತಮ ಉದಾಹರಣೆ.',
      observationEn: 'Great model to teach in-place state mutation (x = x + y).',
      labTipsKn: 'ಮ್ಯಾನುಯಲ್‌ನಲ್ಲಿರುವ ಸ್ಥಿರ ಮೊತ್ತಗಳನ್ನೇ (1000, 500, 200) ನಿಖರವಾಗಿ ಪಾಲಿಸಲಾಗಿದೆ.',
      labTipsEn: 'Strictly matches Exercise 27 in the manual.'
    }
  },

  // LEVEL 05
  {
    id: 5,
    exerciseNumber: 28,
    weekNumber: 8,
    weekTitle: {
      kn: 'ವಾರ 8: ರಾಸ್ಪ್ಬೆರಿ ಪೈ ಪರಿಚಯ ಮತ್ತು ಸೆಟಪ್',
      en: 'Week 8: Introduction To Raspberry Pi And Setup'
    },
    title: {
      kn: 'ಲೆವೆಲ್ 05 – ಮೋಟಾರ್ ಕಂಟ್ರೋಲ್ ವರ್ಕ್‌ಶಾಪ್ (Motor Control Workshop)',
      en: 'Level 05 – Motor Control Workshop'
    },
    subtitle: {
      kn: 'L298N ಮೋಟಾರ್ ಡ್ರೈವರ್ ಮತ್ತು ರಾಸ್ಪ್ಬೆರಿ ಪೈ ಬಳಸಿ DC ಮೋಟಾರ್ ನಿಯಂತ್ರಣ',
      en: 'Controlling DC Motors Using L298N Motor Driver with Raspberry Pi'
    },
    badgeName: {
      kn: 'ಮೆಕಾಟ್ರಾನಿಕ್ಸ್ ಇಂಜಿನಿಯರ್ (Mechatronics Engineer)',
      en: 'Mechatronics Engineer'
    },
    badgeIcon: 'Cpu',
    category: 'Hardware & IoT',
    step1What: {
      description: {
        kn: 'ಈ ಹಂತದಲ್ಲಿ ನಾವು ರಾಸ್ಪ್ಬೆರಿ ಪೈ (Raspberry Pi) ನ GPIO ಪಿನ್‌ಗಳನ್ನು (GPIO 17 ಮತ್ತು 18) ಬಳಸಿ, L298N ಮೋಟಾರ್ ಡ್ರೈವರ್ ಮೂಲಕ DC ಮೋಟಾರ್ ಅನ್ನು 5 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಮುಂದಕ್ಕೆ (Forward) ತಿರುಗಿಸಿ ನಂತರ ನಿಲ್ಲಿಸುತ್ತೇವೆ (Stop).',
        en: 'In this exercise, we use Raspberry Pi GPIO pins (17 and 18) via an L298N motor driver module to rotate a DC motor forward for 5 seconds and then stop it.'
      },
      keyPoints: [
        { kn: '`from gpiozero import Motor`: ಪೈಥಾನ್‌ನಲ್ಲಿ ಸುಲಭವಾಗಿ ಮೋಟಾರ್ ಕಂಟ್ರೋಲ್ ಮಾಡಲು gpiozero ಲೈಬ್ರರಿ ಬಳಸುತ್ತೇವೆ.', en: '`gpiozero` library simplifies motor control on Raspberry Pi.' },
        { kn: '`motor = Motor(forward=17, backward=18)`: ಕಂಟ್ರೋಲರ್ ಪಿನ್ 17 ಮತ್ತು 18 ಅನ್ನು ನಿಗದಿಪಡಿಸುತ್ತದೆ.', en: 'Configures GPIO 17 (forward) and GPIO 18 (backward).' },
        { kn: '`sleep(5)`: ಮೋಟಾರ್ 5 ಸೆಕೆಂಡು ತಿರುಗುವವರೆಗೆ ಪ್ರೋಗ್ರಾಂ ಅನ್ನು ಕಾಯಿಸುತ್ತದೆ.', en: '`sleep(5)` pauses the script for 5 seconds while motor keeps spinning.' }
      ]
    },
    step2Engineering: {
      title: {
        kn: 'ಮೆಕ್ಯಾನಿಕಲ್ ಇಂಜಿನಿಯರಿಂಗ್‌ನಲ್ಲಿ ಇದರ ಮಹತ್ವ',
        en: 'Mechanical & Mechatronics Importance'
      },
      analogy: {
        kn: 'ಕನ್ವೇಯರ್ ಬೆಲ್ಟ್ (Conveyor Belt) ಅಥವಾ ಸಿಎನ್‌ಸಿ ಮೆಷಿನ್‌ನ ಫೀಡ್ ಮೋಟಾರ್ ಅನ್ನು ಆನ್ ಮಾಡಿ 5 ಸೆಕೆಂಡುಗಳ ನಂತರ ನಿಲ್ಲಿಸಲು ಇಂಜಿನಿಯರ್‌ಗಳು ಇದೇ ತಂತ್ರಜ್ಞಾನ ಬಳಸುತ್ತಾರೆ. ರಾಸ್ಪ್ಬೆರಿ ಪೈ ಕಡಿಮೆ ವೋಲ್ಟೇಜ್ ನೀಡುತ್ತದೆ, ಆದರೆ ಮೋಟಾರ್‌ಗೆ ಹೆಚ್ಚು ಕರೆಂಟ್ ಬೇಕು. ಆದ್ದರಿಂದ ಮಧ್ಯದಲ್ಲಿ L298N ಮೋಟಾರ್ ಡ್ರೈವರ್ ಅನ್ನು "ವಿದ್ಯುತ್ ಸ್ವಿಚ್ / ಆಂಪ್ಲಿಫೈಯರ್" ಆಗಿ ಬಳಸುತ್ತೇವೆ!',
        en: 'In modern factories, robotic arms and conveyor belts are driven by DC and stepper motors. A microcomputer like Raspberry Pi outputs low logic signals (3.3V), while a motor requires 12V high current. The L298N motor driver acts as the heavy-duty muscular switch bridge!'
      },
      industryUseCase: {
        kn: 'ಕಾರ್ಖಾನೆಯ ಕನ್ವೇಯರ್ ಸಿಸ್ಟಮ್, ಆಟೋಮ್ಯಾಟಿಕ್ ಗೇಟ್ ಮತ್ತು ಎಲೆಕ್ಟ್ರಿಕ್ ವಾಹನ ಡ್ರೈವ್ ಕಂಟ್ರೋಲರ್.',
        en: 'Conveyor Belts, Automated Guided Vehicles (AGV), Industrial Actuators.'
      },
      icon: 'RotateCw'
    },
    step3Python: {
      title: {
        kn: 'ಮೋಟಾರ್ ಕಂಟ್ರೋಲ್‌ನ 3 ಮುಖ್ಯ ಹಂತಗಳು',
        en: '3 Steps to Motor Automation'
      },
      summary: {
        kn: 'GPIO ಪಿನ್ ಸೆಟಪ್ -> forward() ಆದೇಶ -> sleep(5) -> stop() ಆದೇಶ.',
        en: 'GPIO Pin Setup -> forward() command -> sleep(5) delay -> stop() command.'
      },
      rules: [
        { kn: '1. `Motor(forward=17, backward=18)`: ಮೋಟಾರ್ ಸಂಪರ್ಕಿಸಿದ ಪಿನ್‌ಗಳನ್ನು ಸೆಟ್ ಮಾಡುತ್ತದೆ.', en: '1. Motor class binds to designated GPIO pins.' },
        { kn: '2. `motor.forward()`: ಮೋಟಾರ್ ಅನ್ನು ಕ್ಲಾಕ್‌ವೈಸ್ ಮುಂದಕ್ಕೆ ತಿರುಗಿಸುತ್ತದೆ.', en: '2. `motor.forward()` triggers forward clockwise rotation.' },
        { kn: '3. `sleep(5)`: 5 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಚಲನೆ ಮುಂದುವರಿಯುತ್ತದೆ.', en: '3. `sleep(5)` delays execution for 5 seconds.' },
        { kn: '4. `motor.stop()`: ಮೋಟಾರ್‌ಗೆ ವಿದ್ಯುತ್ ಪೂರೈಕೆ ಕಡಿತಗೊಳಿಸಿ ನಿಲ್ಲಿಸುತ್ತದೆ.', en: '4. `motor.stop()` terminates motor rotation safely.' }
      ],
      terms: [
        { term: 'GPIO', meaningKn: 'ಸಾಮಾನ್ಯ ಇನ್‌ಪುಟ್/ಔಟ್‌ಪುಟ್ ಪಿನ್‌ಗಳು (General Purpose I/O)', meaningEn: 'General Purpose Input/Output pins on Raspberry Pi' },
        { term: 'L298N Driver', meaningKn: 'ಮೋಟಾರ್‌ಗೆ ಹೆಚ್ಚು ಕರೆಂಟ್ ಕೊಡುವ ಡ್ರೈವರ್ ಬೋರ್ಡ್', meaningEn: 'Dual H-Bridge motor driver chip/board' },
        { term: 'sleep(5)', meaningKn: '5 ಸೆಕೆಂಡು ಕಾಲ ಪ್ರೋಗ್ರಾಂ ತಡೆಹಿಡಿಯುವುದು', meaningEn: 'Time delay in seconds' }
      ]
    },
    step4Code: {
      originalCode: `from gpiozero import Motor
from time import sleep
motor = Motor(forward=17, backward=18)
motor.forward()
print("Motor Rotating Forward")
sleep(5)
motor.stop()
print("Motor Stopped")`,
      sampleDataDescription: {
        kn: 'ಗಮನಿಸಿ: ಈ ಪ್ರೋಗ್ರಾಂ ಭೌತಿಕ ರಾಸ್ಪ್ಬೆರಿ ಪೈ ಬೋರ್ಡ್‌ನಲ್ಲಿ ಚಾಲನೆಗೊಳ್ಳುತ್ತದೆ. ಬ್ರೌಸರ್‌ನಲ್ಲಿ ನಾವು ಇದರ ನಿಖರ ವರ್ಚುವಲ್ ಸಿಮ್ಯುಲೇಶನ್ ಅನ್ನು ವೀಕ್ಷಿಸುತ್ತೇವೆ.',
        en: 'Note: Runs on physical Raspberry Pi hardware. In the browser, this runs as an interactive visual simulation.'
      }
    },
    step5LineByLine: [
      { line: 1, code: 'from gpiozero import Motor', kn: '`gpiozero` ಲೈಬ್ರರಿಯಿಂದ `Motor` ಕ್ಲಾಸ್ ಅನ್ನು ಆಮದು ಮಾಡಿಕೊಳ್ಳುತ್ತದೆ.', en: 'Imports Motor class from gpiozero module.' },
      { line: 2, code: 'from time import sleep', kn: 'ವಿಳಂಬ (delay) ನೀಡಲು `time` ಮಾಡ್ಯೂಲ್‌ನಿಂದ `sleep` ಆಮದು ಮಾಡಿಕೊಳ್ಳುತ್ತದೆ.', en: 'Imports sleep function for time delays.' },
      { line: 3, code: 'motor = Motor(forward=17, backward=18)', kn: 'GPIO ಪಿನ್ 17 ಮತ್ತು 18 ನ್ನು ಫಾರ್ವರ್ಡ್ ಮತ್ತು ಬ್ಯಾಕ್‌ವರ್ಡ್‌ಗೆ ನಿಯೋಜಿಸುತ್ತದೆ.', en: 'Assigns GPIO pins 17 and 18 to motor object.' },
      { line: 4, code: 'motor.forward()', kn: 'ಮೋಟಾರ್ ಮುಂದಕ್ಕೆ ತಿರುಗುವಂತೆ ಸಂಕೇತ (Signal) ಕಳುಹಿಸುತ್ತದೆ.', en: 'Sends high signal to rotate motor forward.' },
      { line: 5, code: 'print("Motor Rotating Forward")', kn: '"Motor Rotating Forward" ಎಂದು ಕನ್ಸೋಲ್‌ನಲ್ಲಿ ಮುದ್ರಿಸುತ್ತದೆ.', en: 'Prints Motor Rotating Forward status.' },
      { line: 6, code: 'sleep(5)', kn: 'ಮೋಟಾರ್ ನಿಲ್ಲದೆ 5 ಸೆಕೆಂಡುಗಳ ಕಾಲ ತಿರುಗಲು ಕಾಯಿಸುತ್ತದೆ.', en: 'Pauses Python execution for 5 seconds.' },
      { line: 7, code: 'motor.stop()', kn: 'ಮೋಟಾರ್ ತಿರುಗುವುದನ್ನು ನಿಲ್ಲಿಸುತ್ತದೆ.', en: 'Cuts motor drive signal to stop rotation.' },
      { line: 8, code: 'print("Motor Stopped")', kn: '"Motor Stopped" ಎಂದು ಮುದ್ರಿಸುತ್ತದೆ.', en: 'Prints Motor Stopped status.' }
    ],
    step6Predict: {
      prompt: {
        kn: '`motor.forward()` ಮತ್ತು `motor.stop()` ನಡುವೆ `sleep(5)` ಇದೆ. ಮೋಟಾರ್ ಎಷ್ಟು ಸೆಕೆಂಡುಗಳ ಕಾಲ ತಿರುಗುತ್ತದೆ?',
        en: 'With sleep(5) between motor.forward() and motor.stop(), how long does the motor spin?'
      },
      options: [
        {
          textKn: '5 ಸೆಕೆಂಡುಗಳು (5 seconds)',
          textEn: '5 seconds',
          isCorrect: true,
          explanationKn: 'ಸರಿ! `sleep(5)` ಎಂದರೆ 5 ಸೆಕೆಂಡುಗಳ ಕಾಲ ಮೋಟಾರ್ ಫಾರ್ವರ್ಡ್ ಮೋಡ್‌ನಲ್ಲಿರುತ್ತದೆ.',
          explanationEn: 'Correct! sleep(5) delays for 5 seconds before stop() is called.'
        },
        {
          textKn: '1 ಸೆಕೆಂಡು (1 second)',
          textEn: '1 second',
          isCorrect: false,
          explanationKn: 'ತಪ್ಪು, ಬ್ರಾಕೆಟ್‌ನಲ್ಲಿ 5 ಎಂದು ನಮೂದಿಸಲಾಗಿದೆ.',
          explanationEn: 'Incorrect, the parameter is 5.'
        },
        {
          textKn: 'ಶಾಶ್ವತವಾಗಿ ತಿರುಗುತ್ತಲೇ ಇರುತ್ತದೆ',
          textEn: 'Spins forever without stopping',
          isCorrect: false,
          explanationKn: 'ತಪ್ಪು, 5 ಸೆಕೆಂಡುಗಳ ನಂತರ `motor.stop()` ಕರೆಯಲಾಗಿದೆ.',
          explanationEn: 'Incorrect, motor.stop() is executed.'
        }
      ]
    },
    step7Run: {
      expectedStdout: `Motor Rotating Forward
Motor Stopped`,
      isSimulation: true,
      simulationNotice: {
        kn: 'ವರ್ಚುವಲ್ ಸಿಮ್ಯುಲೇಶನ್: ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಭೌತಿಕ ಹಾರ್ಡ್‌ವೇರ್ ಸಂಪರ್ಕ ಇರುವುದಿಲ್ಲ. ಇದು ರಾಸ್ಪ್ಬೆರಿ ಪೈ ಮತ್ತು L298N ಮೋಟಾರ್ ಡ್ರೈವರ್‌ನ ಡಿಜಿಟಲ್ ಸಿಮ್ಯುಲೇಶನ್ ಆಗಿದೆ.',
        en: 'Virtual Simulation: Real physical hardware is simulated visually in browser.'
      },
      simulationType: 'motor'
    },
    step8Challenge: [
      {
        id: 'q1',
        questionKn: 'ರಾಸ್ಪ್ಬೆರಿ ಪೈ ಕೋಡ್‌ನಲ್ಲಿ `sleep(5)` ಫಂಕ್ಷನ್ ಯಾವ ಲೈಬ್ರರಿಯಿಂದ ಬರುತ್ತದೆ?',
        questionEn: 'Which standard Python module provides the sleep function in this program?',
        options: [
          { textKn: 'time', textEn: 'time', isCorrect: true },
          { textKn: 'math', textEn: 'math', isCorrect: false },
          { textKn: 'gpiozero', textEn: 'gpiozero', isCorrect: false }
        ],
        hintKn: 'ಸಮಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಲೈಬ್ರರಿ ಹೆಸರು.',
        hintEn: 'Module related to clocks and time.',
        explanationKn: '`from time import sleep` ಮೂಲಕ ಸಮಯ ವಿಳಂಬ ಪಡೆಯಲಾಗುತ್ತದೆ.',
        explanationEn: '`sleep` is part of the standard `time` module.'
      },
      {
        id: 'q2',
        questionKn: 'ಮೋಟಾರ್ ಅನ್ನು ನಿಲ್ಲಿಸಲು `gpiozero` ನಲ್ಲಿ ಯಾವ ಮೆಥಡ್ ಕರೆಯಬೇಕು?',
        questionEn: 'Which method on the motor instance halts rotation?',
        options: [
          { textKn: 'motor.stop()', textEn: 'motor.stop()', isCorrect: true },
          { textKn: 'motor.pause()', textEn: 'motor.pause()', isCorrect: false },
          { textKn: 'motor.off()', textEn: 'motor.off()', isCorrect: false }
        ],
        hintKn: 'ವಾಹನ ನಿಲ್ಲಿಸುವ ಪದ.',
        hintEn: 'Exact method name in manual code.',
        explanationKn: '`motor.stop()` ಮೋಟಾರ್ ಅನ್ನು ತಕ್ಷಣ ನಿಲ್ಲಿಸುತ್ತದೆ.',
        explanationEn: '`motor.stop()` is the designated API.'
      }
    ],
    practiceMode: {
      cloze: {
        instructionKn: 'ಮೋಟಾರ್ ಕಂಟ್ರೋಲ್ ಕೋಡ್ ಸಾಲುಗಳನ್ನು ಜೋಡಿಸಿ:',
        instructionEn: 'Fill in the blanks for motor control:',
        codeTemplate: `from gpiozero import {{BLANK1}}
from time import sleep
motor = Motor(forward={{BLANK2}}, backward=18)
motor.{{BLANK3}}()
sleep(5)
motor.stop()`,
        blanks: [
          { id: 'BLANK1', answer: 'Motor', options: ['Motor', 'LED', 'Button', 'Servo'] },
          { id: 'BLANK2', answer: '17', options: ['17', '5', '0', '100'] },
          { id: 'BLANK3', answer: 'forward', options: ['forward', 'start', 'run', 'speed'] }
        ]
      },
      termMatches: [
        { term: 'motor.forward()', meaningKn: 'ಮೋಟಾರ್ ಮುಂದಕ್ಕೆ ತಿರುಗಿಸು', meaningEn: 'Spin motor forward' },
        { term: 'sleep(5)', meaningKn: '5 ಸೆಕೆಂಡು ವಿಳಂಬ', meaningEn: 'Wait 5 seconds' },
        { term: 'motor.stop()', meaningKn: 'ಮೋಟಾರ್ ನಿಲ್ಲಿಸು', meaningEn: 'Halt motor' }
      ]
    },
    testMode: {
      questions: [
        {
          id: 'v1',
          questionKn: 'ರಾಸ್ಪ್ಬೆರಿ ಪೈ ಮತ್ತು ಮೋಟಾರ್ ನಡುವೆ L298N ಮೋಟಾರ್ ಡ್ರೈವರ್ ಅನ್ನು ಏಕೆ ಬಳಸಲಾಗುತ್ತದೆ?',
          questionEn: 'Why do we use an L298N motor driver between the Raspberry Pi and the DC motor?',
          options: [
            { textKn: 'ರಾಸ್ಪ್ಬೆರಿ ಪೈ ಪಿನ್‌ಗಳು ಮೋಟಾರ್ ಓಡಿಸಲು ಬೇಕಾದಷ್ಟು ಹೆಚ್ಚಿನ ವಿದ್ಯುತ್ (Current) ನೀಡಲಾರವು', textEn: 'Raspberry Pi GPIO pins cannot supply high current required by DC motors', isCorrect: true },
            { textKn: 'ಮೋಟಾರ್‌ಗೆ ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕ ನೀಡಲು', textEn: 'To give internet to motor', isCorrect: false },
            { textKn: 'ಕೇವಲ ಬಣ್ಣ ಸುಂದರಗೊಳಿಸಲು', textEn: 'Cosmetic decoration', isCorrect: false }
          ],
          explanationKn: 'ರಾಸ್ಪ್ಬೆರಿ ಪೈ ಕೇವಲ 3.3V ಸಿಗ್ನಲ್ ನೀಡುತ್ತದೆ. ಮೋಟಾರ್ ಓಡಲು 12V ಬೇಕು, ಇದನ್ನು L298N ಡ್ರೈವರ್ ಒದಗಿಸುತ್ತದೆ.',
          explanationEn: 'Raspberry Pi GPIO logic is 3.3V/16mA; motors need high current (up to 2A) and voltage provided through L298N.'
        }
      ]
    },
    teacherNotes: {
      observationKn: 'ಲ್ಯಾಬ್‌ನಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳು ನೇರವಾಗಿ ರಾಸ್ಪ್ಬೆರಿ ಪೈ ಪಿನ್‌ಗೆ ಮೋಟಾರ್ ತಂತಿಯನ್ನು ಜೋಡಿಸಿ ಬೋರ್ಡ್ ಹಾಳು ಮಾಡದಂತೆ ಎಚ್ಚರಿಸಿ. L298N ಡ್ರೈವರ್‌ನ ಮಹತ್ವವನ್ನು ಒತ್ತಿ ಹೇಳಿ.',
      observationEn: 'Emphasize that connecting a DC motor directly to Pi GPIO will burn the board due to back-EMF and high current draw; L298N is essential.',
      labTipsKn: 'ಮ್ಯಾನುಯಲ್ ಕೋಡ್ ಪಿನ್ 17 ಮತ್ತು 18 ನ್ನು ಫಾರ್ವರ್ಡ್/ಬ್ಯಾಕ್‌ವರ್ಡ್‌ಗೆ ಬಳಸುತ್ತದೆ. ಇದನ್ನು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸ್ಪಷ್ಟವಾಗಿ ತೋರಿಸಿ.',
      labTipsEn: 'Verifies pins 17 and 18 as per Fig. 8.5 in the manual.'
    }
  },

  // LEVEL 06
  {
    id: 6,
    exerciseNumber: 29,
    weekNumber: 8,
    weekTitle: {
      kn: 'ವಾರ 8: ರಾಸ್ಪ್ಬೆರಿ ಪೈ ಪರಿಚಯ ಮತ್ತು ಸೆಟಪ್',
      en: 'Week 8: Introduction To Raspberry Pi And Setup'
    },
    title: {
      kn: 'ಲೆವೆಲ್ 06 – ಸ್ಮಾರ್ಟ್ ಫ್ಯಾಕ್ಟರಿ ಆಟೋಮೇಷನ್ (Smart Factory Automation)',
      en: 'Level 06 – Smart Factory Automation'
    },
    subtitle: {
      kn: 'ಫ್ಯಾನ್ ಮತ್ತು ವಾಟರ್ ಪಂಪ್ ಕಂಟ್ರೋಲರ್ (Fan / Water Pump Controller)',
      en: 'Building a Simple Automated System (Fan / Water Pump Controller)'
    },
    badgeName: {
      kn: 'ಆಟೋಮೇಷನ್ ಎಂಜಿನಿಯರ್ (Automation Engineer)',
      en: 'Automation Engineer'
    },
    badgeIcon: 'Factory',
    category: 'Hardware & IoT',
    step1What: {
      description: {
        kn: 'ಈ ಹಂತದಲ್ಲಿ ನಾವು ಕಾರ್ಖಾನೆಯ ಎರಡು ಸ್ವಯಂಚಾಲಿತ ವ್ಯವಸ್ಥೆಗಳನ್ನು (Automated Systems) ಕಲಿಯುತ್ತೇವೆ:\n1. ಫ್ಯಾನ್ ಕಂಟ್ರೋಲರ್: ತಾಪಮಾನ 30 ಡಿಗ್ರಿಗಿಂತ ಹೆಚ್ಚಿದ್ದರೆ ಫ್ಯಾನ್ ಚಾಲನೆ (Fan ON), ಇಲ್ಲದಿದ್ದರೆ ಆಫ್ (Fan OFF).\n2. ವಾಟರ್ ಪಂಪ್ ಕಂಟ್ರೋಲರ್: ನೀರಿನ ಮಟ್ಟ 30 ಕ್ಕಿಂತ ಕಡಿಮೆಯಿದ್ದರೆ ಪಂಪ್ ಆನ್ (Water Pump ON), ಇಲ್ಲದಿದ್ದರೆ ಆಫ್.',
        en: 'We build two simple automated factory controllers using if-else logic: 1. Fan Controller (turns fan ON if temperature > 30), 2. Water Pump Controller (turns pump ON if water level < 30).'
      },
      keyPoints: [
        { kn: '`if temperature > 30 :`: ತಾಪಮಾನ 35 ಇರುವುದರಿಂದ 30 ಕ್ಕಿಂತ ಹೆಚ್ಚು, ಆದ್ದರಿಂದ ಫ್ಯಾನ್ ON ಆಗುತ್ತದೆ.', en: 'Given temperature = 35, the condition 35 > 30 is TRUE, so fan turns ON.' },
        { kn: '`if water_level < 30 :`: ನೀರಿನ ಮಟ್ಟ 20 ಇರುವುದರಿಂದ 30 ಕ್ಕಿಂತ ಕಡಿಮೆ, ಆದ್ದರಿಂದ ಪಂಪ್ ON ಆಗುತ್ತದೆ.', en: 'Given water_level = 20, 20 < 30 is TRUE, so water pump turns ON.' },
        { kn: '`if-else` ಕಂಡೀಷನ್ಸ್ ಮೆಕ್ಯಾನಿಕಲ್ ಆಟೋಮೇಷನ್‌ನ ಪ್ರಮುಖ ಆಧಾರಸ್ತಂಭ.', en: 'if-else logic drives industrial decision-making.' }
      ]
    },
    step2Engineering: {
      title: {
        kn: 'ಕಾರ್ಖಾನೆಯ ಆಟೋಮೇಷನ್ ಅನ್ವಯ',
        en: 'Factory Process Automation'
      },
      analogy: {
        kn: 'ಬಾಯ್ಲರ್ (Boiler) ಅಥವಾ ಪವರ್ ಪ್ಲಾಂಟ್‌ನಲ್ಲಿ ಮನುಷ್ಯರು ಸದಾ ಕಾಲ ನಿಂತು ತಾಪಮಾನ ಅಥವಾ ನೀರಿನ ಮಟ್ಟ ನೋಡಲು ಸಾಧ್ಯವಿಲ್ಲ. ತಾಪಮಾನ ಹೆಚ್ಚಾದಾಗ ತಂಪಾಗಿಸುವ ಕೂಲಿಂಗ್ ಫ್ಯಾನ್ ತಾನಾಗಿಯೇ ಆನ್ ಆಗಬೇಕು; ತೊಟ್ಟಿಯಲ್ಲಿ ನೀರು ಖಾಲಿಯಾಗುವ ಮುನ್ನವೇ ಮೋಟಾರ್ ಪಂಪ್ ಆನ್ ಆಗಬೇಕು. ಈ ಎರಡೂ ತಂತ್ರಜ್ಞಾನಗಳು ಈ ಪ್ರೋಗ್ರಾಂನಲ್ಲಿದೆ!',
        en: 'In thermal power plants, metallurgical blast furnaces, or CNC coolant reservoirs, human operators cannot watch gauges 24/7. Programmable controllers automatically trigger coolant fans when temperature rises above threshold, and fill tanks when fluid levels dip low!'
      },
      industryUseCase: {
        kn: 'ಬಾಯ್ಲರ್ ಸುರಕ್ಷತಾ ಕಂಟ್ರೋಲರ್ ಮತ್ತು ಸಿಎನ್‌ಸಿ ಮೆಷಿನ್ ಕೂಲೆಂಟ್ ಸಿಸ್ಟಮ್.',
        en: 'Thermal plant cooling loop & CNC reservoir fluid automation.'
      },
      icon: 'Gauge'
    },
    step3Python: {
      title: {
        kn: 'if-else ಷರತ್ತುಗಳ ನಿಯಮ',
        en: 'Conditional Logic in Python'
      },
      summary: {
        kn: 'ಷರತ್ತು ನಿಜವಾದರೆ (True) `if` ಒಳಗಿನ ಸಾಲುಗಳು, ಸುಳ್ಳಾದರೆ (False) `else` ಒಳಗಿನ ಸಾಲುಗಳು ಚಲಿಸುತ್ತವೆ.',
        en: 'If condition evaluates to True, the if branch executes; otherwise the else branch executes.'
      },
      rules: [
        { kn: '1. `temperature = 35`: ಸಂವೇದಕದಿಂದ ಬಂದ ಮೌಲ್ಯ.', en: '1. `temperature = 35` represents sensor input value.' },
        { kn: '2. `35 > 30` ನಿಜವಾದ್ದರಿಂದ `fan.forward()` ಮತ್ತು `print("Fan ON")` ನಡೆಯುತ್ತದೆ.', en: '2. 35 > 30 evaluates to True, turning Fan ON.' },
        { kn: '3. `water_level = 20`: ನೀರಿನ ಟ್ಯಾಂಕ್ ಮಟ್ಟ.', en: '3. `water_level = 20` represents fluid level sensor.' },
        { kn: '4. `20 < 30` ನಿಜವಾದ್ದರಿಂದ `print("Water Pump ON")` ನಡೆಯುತ್ತದೆ.', en: '4. 20 < 30 evaluates to True, turning Pump ON.' }
      ],
      terms: [
        { term: 'if condition', meaningKn: 'ಒಂದು ವೇಳೆ ಈ ನಿಯಮ ನಿಜವಾಗಿದ್ದರೆ', meaningEn: 'Executes block if statement is True' },
        { term: 'else', meaningKn: 'ಮೇಲಿನ ನಿಯಮ ಸುಳ್ಳಾಗಿದ್ದರೆ', meaningEn: 'Fallback block when condition is False' },
        { term: 'Automation', meaningKn: 'ಮನುಷ್ಯನ ಹಸ್ತಕ್ಷೇಪವಿಲ್ಲದೆ ತಾನೇ ಕೆಲಸ ಮಾಡುವುದು', meaningEn: 'Self-operating process controller' }
      ]
    },
    step4Code: {
      originalCode: `# Program 1: Fan Controller
from gpiozero import Motor
temperature = 35
fan = Motor(forward=17, backward=18)
if temperature > 30 :
fan.forward()
print("Fan ON")
else :
fan.stop()
print("Fan OFF")
# Program 2: Water Pump Controller
water_level = 20
if water_level < 30 :
print("Water Pump ON")
else :
print("Water Pump OFF")`
    },
    step5LineByLine: [
      { line: 1, code: '# Program 1: Fan Controller', kn: 'ಕಾಮೆಂಟ್ ಸಾಲು: ಫ್ಯಾನ್ ನಿಯಂತ್ರಕ ಭಾಗ.', en: 'Comment: Part 1 Fan Controller.' },
      { line: 2, code: 'from gpiozero import Motor', kn: '`Motor` ಕ್ಲಾಸ್ ಆಮದು ಮಾಡಿಕೊಳ್ಳುತ್ತದೆ.', en: 'Imports Motor from gpiozero.' },
      { line: 3, code: 'temperature = 35', kn: 'ತಾಪಮಾನ 35 ಡಿಗ್ರಿ ಸೆಲ್ಸಿಯಸ್ ಎಂದು ನಿಗದಿಪಡಿಸುತ್ತದೆ.', en: 'Sets ambient temperature to 35.' },
      { line: 4, code: 'fan = Motor(forward=17, backward=18)', kn: 'ಪಿನ್ 17 ಮತ್ತು 18 ಕ್ಕೆ ಫ್ಯಾನ್ ಮೋಟಾರ್ ನಿಯೋಜಿಸುತ್ತದೆ.', en: 'Binds fan motor to pins 17 and 18.' },
      { line: 5, code: 'if temperature > 30 :', kn: 'ತಾಪಮಾನ 30 ಕ್ಕಿಂತ ಹೆಚ್ಚಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ (35 > 30 = True).', en: 'Tests if temperature > 30 (35 > 30 is True).' },
      { line: 6, code: 'fan.forward()', kn: 'ಫ್ಯಾನ್ ಮುಂದಕ್ಕೆ ತಿರುಗಲು ಶುರುವಾಗುತ್ತದೆ.', en: 'Starts fan motor rotation.' },
      { line: 7, code: 'print("Fan ON")', kn: '"Fan ON" ಎಂದು ಪ್ರಿಂಟ್ ಮಾಡುತ್ತದೆ.', en: 'Prints Fan ON.' },
      { line: 8, code: 'else :', kn: 'ತಾಪಮಾನ 30 ಕ್ಕಿಂತ ಕಡಿಮೆಯಿದ್ದರೆ...', en: 'Fallback branch if temperature <= 30.' },
      { line: 9, code: 'fan.stop()', kn: 'ಫ್ಯಾನ್ ನಿಲ್ಲಿಸುತ್ತದೆ.', en: 'Stops fan motor.' },
      { line: 10, code: 'print("Fan OFF")', kn: '"Fan OFF" ಎಂದು ಪ್ರಿಂಟ್ ಮಾಡುತ್ತದೆ.', en: 'Prints Fan OFF.' },
      { line: 11, code: '# Program 2: Water Pump Controller', kn: 'ಕಾಮೆಂಟ್ ಸಾಲು: ವಾಟರ್ ಪಂಪ್ ಭಾಗ.', en: 'Comment: Part 2 Water Pump Controller.' },
      { line: 12, code: 'water_level = 20', kn: 'ನೀರಿನ ಮಟ್ಟವನ್ನು 20 ಎಂದು ನಿಗದಿಪಡಿಸುತ್ತದೆ.', en: 'Sets water level to 20.' },
      { line: 13, code: 'if water_level < 30 :', kn: 'ನೀರಿನ ಮಟ್ಟ 30 ಕ್ಕಿಂತ ಕಡಿಮೆಯಿದೆಯೇ ಪರಿಶೀಲಿಸುತ್ತದೆ (20 < 30 = True).', en: 'Tests if water_level < 30 (20 < 30 is True).' },
      { line: 14, code: 'print("Water Pump ON")', kn: '"Water Pump ON" ಎಂದು ಪ್ರಿಂಟ್ ಮಾಡುತ್ತದೆ.', en: 'Prints Water Pump ON.' },
      { line: 15, code: 'else :', kn: 'ನೀರಿನ ಮಟ್ಟ 30 ಅಥವಾ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚಿದ್ದರೆ...', en: 'Fallback if tank has sufficient water.' },
      { line: 16, code: 'print("Water Pump OFF")', kn: '"Water Pump OFF" ಎಂದು ಪ್ರಿಂಟ್ ಮಾಡುತ್ತದೆ.', en: 'Prints Water Pump OFF.' }
    ],
    step6Predict: {
      prompt: {
        kn: 'ತಾಪಮಾನ = 35 ಮತ್ತು ನೀರಿನ ಮಟ್ಟ = 20 ಇದ್ದಾಗ ಪ್ರೋಗ್ರಾಂನ ಒಟ್ಟು ಔಟ್‌ಪುಟ್ ಏನಾಗಿರುತ್ತದೆ?',
        en: 'With temperature = 35 and water_level = 20, what will be the exact two lines printed by this program?'
      },
      options: [
        {
          textKn: 'Fan ON, ನಂತರ Water Pump ON',
          textEn: 'Fan ON, followed by Water Pump ON',
          isCorrect: true,
          explanationKn: 'ಸರಿ! 35 > 30 (Fan ON) ಮತ್ತು 20 < 30 (Water Pump ON) ಎರಡೂ ನಿಜವಾಗಿವೆ.',
          explanationEn: 'Correct! Both conditions (35 > 30 and 20 < 30) evaluate to True.'
        },
        {
          textKn: 'Fan OFF, ನಂತರ Water Pump OFF',
          textEn: 'Fan OFF, followed by Water Pump OFF',
          isCorrect: false,
          explanationKn: 'ತಪ್ಪು, 35 ತಾಪಮಾನವು 30 ಕ್ಕಿಂತ ಹೆಚ್ಚಾಗಿದೆ.',
          explanationEn: 'Incorrect, temperature is higher than 30.'
        },
        {
          textKn: 'Fan ON, ನಂತರ Water Pump OFF',
          textEn: 'Fan ON, followed by Water Pump OFF',
          isCorrect: false,
          explanationKn: 'ತಪ್ಪು, ನೀರಿನ ಮಟ್ಟ 20 ಆಗಿರುವುದರಿಂದ ಅದು 30 ಕ್ಕಿಂತ ಕಡಿಮೆ, ಪಂಪ್ ಆನ್ ಆಗಬೇಕು.',
          explanationEn: 'Incorrect, 20 is strictly less than 30, so pump must be ON.'
        }
      ]
    },
    step7Run: {
      expectedStdout: `Fan ON
Water Pump ON`,
      isSimulation: true,
      simulationType: 'factory'
    },
    step8Challenge: [
      {
        id: 'q1',
        questionKn: 'ಒಂದು ವೇಳೆ ತಾಪಮಾನವು 25 ಡಿಗ್ರಿ ಇದ್ದರೆ ಫ್ಯಾನ್ ಏನಾಗುತ್ತದೆ?',
        questionEn: 'If temperature were 25 degrees, what would happen to the fan?',
        options: [
          { textKn: 'Fan OFF ಆಗುತ್ತದೆ (25 > 30 ಸುಳ್ಳು)', textEn: 'Fan OFF (25 > 30 is False)', isCorrect: true },
          { textKn: 'Fan ON ಆಗುತ್ತದೆ', textEn: 'Fan ON', isCorrect: false },
          { textKn: 'ಮೋಟಾರ್ ಸುಟ್ಟುಹೋಗುತ್ತದೆ', textEn: 'Motor burns out', isCorrect: false }
        ],
        hintKn: '25 ಎಂಬುದು 30 ಕ್ಕಿಂತ ದೊಡ್ಡದಾ ಅಥವಾ ಸಣ್ಣದಾ?',
        hintEn: '25 is less than 30.',
        explanationKn: '25 > 30 ಸುಳ್ಳಾಗುವುದರಿಂದ `else` ಭಾಗ ಚಲಿಸಿ "Fan OFF" ಬರುತ್ತದೆ.',
        explanationEn: 'Since 25 is not > 30, execution transfers to else block (Fan OFF).'
      },
      {
        id: 'q2',
        questionKn: 'ನೀರಿನ ಮಟ್ಟ 45 ಇದ್ದರೆ ಪ್ರೋಗ್ರಾಂ ಏನು ಪ್ರಿಂಟ್ ಮಾಡುತ್ತದೆ?',
        questionEn: 'If water_level were 45, what would the pump program print?',
        options: [
          { textKn: 'Water Pump OFF', textEn: 'Water Pump OFF', isCorrect: true },
          { textKn: 'Water Pump ON', textEn: 'Water Pump ON', isCorrect: false },
          { textKn: 'Tank Full', textEn: 'Tank Full', isCorrect: false }
        ],
        hintKn: '45 < 30 ಎಂಬುದು ಸುಳ್ಳು (False).',
        hintEn: '45 < 30 evaluates to False.',
        explanationKn: 'ತೊಟ್ಟಿಯಲ್ಲಿ ಸಾಕಷ್ಟು ನೀರಿರುವುದರಿಂದ ಪಂಪ್ ಆಫ್ ಆಗಿರುತ್ತದೆ.',
        explanationEn: 'Pump turns OFF when water level is 30 or above.'
      }
    ],
    practiceMode: {
      cloze: {
        instructionKn: 'ಆಟೋಮೇಷನ್ ಕೋಡ್ ಷರತ್ತುಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ:',
        instructionEn: 'Complete the automation conditional statements:',
        codeTemplate: `temperature = 35
if temperature {{BLANK1}} 30 :
    print("Fan ON")
else :
    print("Fan OFF")

water_level = 20
if water_level {{BLANK2}} 30 :
    print("Water Pump ON")
{{BLANK3}} :
    print("Water Pump OFF")`,
        blanks: [
          { id: 'BLANK1', answer: '>', options: ['>', '<', '==', '!='] },
          { id: 'BLANK2', answer: '<', options: ['<', '>', '>=', '<='] },
          { id: 'BLANK3', answer: 'else', options: ['else', 'elif', 'finally', 'except'] }
        ]
      },
      termMatches: [
        { term: 'temperature > 30', meaningKn: 'ತಾಪಮಾನ 30 ಕ್ಕಿಂತ ಹೆಚ್ಚು', meaningEn: 'Temperature exceeds 30' },
        { term: 'water_level < 30', meaningKn: 'ನೀರಿನ ಮಟ್ಟ 30 ಕ್ಕಿಂತ ಕಡಿಮೆ', meaningEn: 'Water level below 30' },
        { term: 'Automation', meaningKn: 'ಸ್ವಯಂಚಾಲಿತ ನಿಯಂತ್ರಣ', meaningEn: 'Automatic process control' }
      ]
    },
    testMode: {
      questions: [
        {
          id: 'v1',
          questionKn: 'ಮ್ಯಾನುಯಲ್ ಎಕ್ಸರ್‌ಸೈಜ್ 29 ರ ಪ್ರಕಾರ ಈ ಪ್ರೋಗ್ರಾಂನಿಂದ ಬರುವ ಔಟ್‌ಪುಟ್ ಏನು?',
          questionEn: 'What is the exact stdout of Ex. No: 29 according to the laboratory manual?',
          options: [
            { textKn: 'Fan ON ಮತ್ತು Water Pump ON', textEn: 'Fan ON and Water Pump ON', isCorrect: true },
            { textKn: 'Fan OFF ಮತ್ತು Water Pump ON', textEn: 'Fan OFF and Water Pump ON', isCorrect: false },
            { textKn: 'Fan ON ಮತ್ತು Water Pump OFF', textEn: 'Fan ON and Water Pump OFF', isCorrect: false }
          ],
          explanationKn: 'ಮ್ಯಾನುಯಲ್‌ನಲ್ಲಿ `temperature = 35` ಮತ್ತು `water_level = 20` ನೀಡಿರುವುದರಿಂದ ಎರಡೂ ON ಆಗುತ್ತವೆ.',
          explanationEn: 'Temperature 35 triggers Fan ON; Water level 20 triggers Water Pump ON.'
        }
      ]
    },
    teacherNotes: {
      observationKn: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಕಂಡಿಷನಲ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್ (if-else) ಗಳನ್ನು ಮೆಕ್ಯಾನಿಕಲ್ ಸೆನ್ಸಾರ್‌ಗಳಿಗೆ ಜೋಡಿಸಿ ಅರ್ಥಮಾಡಿಸಲು ಇದು ಆದರ್ಶ ಲ್ಯಾಬ್ ಪ್ರಾಕ್ಟಿಕಲ್ ಆಗಿದೆ.',
      observationEn: 'Direct practical connection between if-else programming syntax and physical sensor thresholds.',
      labTipsKn: 'ಮ್ಯಾನುಯಲ್‌ನಲ್ಲಿ Program 1 (Fan) ಮತ್ತು Program 2 (Water Pump) ಎರಡನ್ನೂ ಒಂದೇ ಎಕ್ಸರ್‌ಸೈಜ್‌ನಲ್ಲಿ ನೀಡಲಾಗಿದೆ. ಎರಡನ್ನೂ ಹಾಗೆಯೇ ನಿರ್ವಹಿಸಲಾಗಿದೆ.',
      labTipsEn: 'Matches the twin program structure of Ex. 29 in manual.'
    }
  },

  // LEVEL 07
  {
    id: 7,
    exerciseNumber: 30,
    weekNumber: 9,
    weekTitle: {
      kn: 'ವಾರ 9: ರಾಸ್ಪ್ಬೆರಿ ಪೈ ಬಳಸಿ ಸರಳ ರೋಬೋಟ್ ನಿರ್ಮಾಣ',
      en: 'Week 9: Building A Simple Robot Using Raspberry Pi'
    },
    title: {
      kn: 'ಲೆವೆಲ್ 07 – ರೋಬೋಟ್ ಇಂಜಿನಿಯರ್ (Robot Engineer)',
      en: 'Level 07 – Robot Engineer'
    },
    subtitle: {
      kn: 'ಎರಡು ಮೋಟಾರ್‌ಗಳು (ಎಡ ಮತ್ತು ಬಲ) ಬಳಸಿ ರೋಬೋಟ್ ಚಲನೆ ಮತ್ತು ನಿಲುಗಡೆ',
      en: 'Building a Simple Robot Using Raspberry Pi, Motors and Sensors'
    },
    badgeName: {
      kn: 'ರೋಬೋಟಿಕ್ಸ್ ಕಮಾಂಡರ್ (Robotics Commander)',
      en: 'Robotics Commander'
    },
    badgeIcon: 'Bot',
    category: 'Hardware & IoT',
    step1What: {
      description: {
        kn: 'ಈ ಹಂತದಲ್ಲಿ ನಾವು ಡಿಫರೆನ್ಷಿಯಲ್ ಡ್ರೈವ್ (Differential Drive) ಮೊಬೈಲ್ ರೋಬೋಟ್ ನಿರ್ಮಿಸುತ್ತೇವೆ. ರೋಬೋಟ್‌ಗೆ ಎರಡು ಮೋಟಾರ್‌ಗಳಿವೆ: ಎಡ ಮೋಟಾರ್ (Left Motor: GPIO 17, 18) ಮತ್ತು ಬಲ ಮೋಟಾರ್ (Right Motor: GPIO 22, 23). ಎರಡೂ ಮೋಟಾರ್‌ಗಳು ಏಕಕಾಲದಲ್ಲಿ ಮುಂದಕ್ಕೆ ತಿರುಗಿದಾಗ ರೋಬೋಟ್ 5 ಸೆಕೆಂಡುಗಳ ಕಾಲ ನೇರವಾಗಿ ಚಲಿಸಿ ನಿಲ್ಲುತ್ತದೆ.',
        en: 'We build a 2-wheel differential drive mobile robot. Left motor uses GPIO 17 & 18; Right motor uses GPIO 22 & 23. Both motors spin forward together, moving the robot forward for 5 seconds before stopping.'
      },
      keyPoints: [
        { kn: '`left_motor = Motor(forward=17, backward=18)`: ಎಡ ಚಕ್ರದ ಮೋಟಾರ್.', en: 'Configures Left drive motor on GPIO 17, 18.' },
        { kn: '`right_motor = Motor(forward=22, backward=23)`: ಬಲ ಚಕ್ರದ ಮೋಟಾರ್.', en: 'Configures Right drive motor on GPIO 22, 23.' },
        { kn: 'ಎರಡೂ ಮೋಟಾರ್ `forward()` ಆದರೆ ರೋಬೋಟ್ ನೇರವಾಗಿ ಚಲಿಸುತ್ತದೆ.', en: 'Spinning both forward drives the robot in a straight line.' }
      ]
    },
    step2Engineering: {
      title: {
        kn: 'ಮೆಕಾಟ್ರಾನಿಕ್ಸ್ ಮತ್ತು ರೊಬೊಟಿಕ್ಸ್ ಅನ್ವಯ',
        en: 'Mobile Robotics & AGV Application'
      },
      analogy: {
        kn: 'ಆಧುನಿಕ ಗೋದಾಮುಗಳಲ್ಲಿ (ಉದಾಹರಣೆಗೆ ಅಮೆಜಾನ್ ಅಥವಾ ಆಟೋಮೊಬೈಲ್ ಅಸೆಂಬ್ಲಿ ಲೈನ್) ಸ್ವಯಂಚಾಲಿತ ಗೈಡೆಡ್ ವಾಹನಗಳು (AGV - Automated Guided Vehicles) ಭಾರವಾದ ಇಂಜಿನ್ ಅಥವಾ ಬಿಡಿಭಾಗಗಳನ್ನು ಒಂದು ಕಡೆಯಿಂದ ಮತ್ತೊಂದು ಕಡೆಗೆ ಒಯ್ಯುತ್ತವೆ. ಈ ಪ್ರೋಗ್ರಾಂ ಅಂತಹ ಎಜಿವಿ ರೋಬೋಟ್‌ನ ಮೂಲ ಚಲನಾ ತಂತ್ರಜ್ಞಾನವಾಗಿದೆ!',
        en: 'In smart warehouses and automobile plants, Automated Guided Vehicles (AGV) transport heavy sub-assemblies. By coordinating left and right wheel speeds, robots traverse aisles autonomously!'
      },
      industryUseCase: {
        kn: 'ಕಾರ್ಖಾನೆಯ ಸಾಮಗ್ರಿ ಸಾಗಣೆ ರೋಬೋಟ್‌ಗಳು (Warehouse AGVs & Mobile Robots).',
        en: 'Automated Guided Vehicles (AGVs) & Industrial Mobile Platforms.'
      },
      icon: 'Truck'
    },
    step3Python: {
      title: {
        kn: 'ಮಲ್ಟಿ-ಆಕ್ಚುಯೇಟರ್ ಕಂಟ್ರೋಲ್',
        en: 'Controlling Multiple Actuators'
      },
      summary: {
        kn: 'ಒಂದೇ ಕೋಡ್‌ನಲ್ಲಿ ಎರಡು ಮೋಟಾರ್ ಆಬ್ಜೆಕ್ಟ್‌ಗಳನ್ನು ಸೃಷ್ಟಿಸಿ ಏಕಕಾಲದಲ್ಲಿ ಆದೇಶಗಳನ್ನು ನೀಡುತ್ತೇವೆ.',
        en: 'Creating two separate motor instances and synchronizing their motions.'
      },
      rules: [
        { kn: '1. `left_motor.forward()` ಮತ್ತು `right_motor.forward()` ಎರಡೂ ಚಕ್ರಗಳನ್ನು ಆರಂಭಿಸುತ್ತವೆ.', en: '1. Both wheels spin forward synchronously.' },
        { kn: '2. `sleep(5)`: 5 ಸೆಕೆಂಡುಗಳ ಕಾಲ ರೋಬೋಟ್ ಮುನ್ನಡೆಯುತ್ತದೆ.', en: '2. Drives forward for 5 seconds duration.' },
        { kn: '3. `left_motor.stop()` ಮತ್ತು `right_motor.stop()` ಎರಡೂ ಮೋಟಾರ್ ನಿಲ್ಲಿಸುತ್ತವೆ.', en: '3. Stops both motors together.' },
        { kn: '4. ನಿಲುಗಡೆ ಆದೇಶ ರೋಬೋಟ್ ಗೋಡೆಗೆ ಅಥವಾ ಅಡೆತಡೆಗೆ ಡಿಕ್ಕಿ ಹೊಡೆಯದಂತೆ ರಕ್ಷಿಸುತ್ತದೆ.', en: '4. Halting prevents physical collision.' }
      ],
      terms: [
        { term: 'Differential Drive', meaningKn: 'ಎರಡು ಪ್ರತ್ಯೇಕ ಮೋಟಾರ್‌ಗಳ ಮೂಲಕ ವಾಹನ ತಿರುಗಿಸುವ ತಂತ್ರಜ್ಞಾನ', meaningEn: 'Two independent drive wheels for locomotion' },
        { term: 'Synchronous Control', meaningKn: 'ಎರಡು ಮೋಟಾರ್‌ಗಳಿಗೆ ಏಕಕಾಲದಲ್ಲಿ ಸಿಗ್ನಲ್ ಕಳುಹಿಸುವುದು', meaningEn: 'Coordinated simultaneous actuation' },
        { term: 'Mobile Robot', meaningKn: 'ಚಕ್ರಗಳ ಸಹಾಯದಿಂದ ಚಲಿಸುವ ಯಂತ್ರ', meaningEn: 'Autonomous wheeled platform' }
      ]
    },
    step4Code: {
      originalCode: `from gpiozero import Motor
from time import sleep
left_motor = Motor(forward=17, backward=18)
right_motor = Motor(forward=22, backward=23)
left_motor.forward()
right_motor.forward()
print("Robot Moving Forward")
sleep(5)
left_motor.stop()
right_motor.stop()
print("Robot Stopped")`
    },
    step5LineByLine: [
      { line: 1, code: 'from gpiozero import Motor', kn: '`Motor` ನಿಯಂತ್ರಕ ಕ್ಲಾಸ್ ಆಮದು ಮಾಡಿಕೊಳ್ಳುತ್ತದೆ.', en: 'Imports Motor class from gpiozero.' },
      { line: 2, code: 'from time import sleep', kn: 'ವಿಳಂಬಕ್ಕಾಗಿ `sleep` ಆಮದು ಮಾಡಿಕೊಳ್ಳುತ್ತದೆ.', en: 'Imports sleep from time.' },
      { line: 3, code: 'left_motor = Motor(forward=17, backward=18)', kn: 'ಎಡ ಮೋಟಾರ್ ಅನ್ನು GPIO ಪಿನ್ 17 ಮತ್ತು 18 ಕ್ಕೆ ನಿಯೋಜಿಸುತ್ತದೆ.', en: 'Initializes left motor on pins 17 & 18.' },
      { line: 4, code: 'right_motor = Motor(forward=22, backward=23)', kn: 'ಬಲ ಮೋಟಾರ್ ಅನ್ನು GPIO ಪಿನ್ 22 ಮತ್ತು 23 ಕ್ಕೆ ನಿಯೋಜಿಸುತ್ತದೆ.', en: 'Initializes right motor on pins 22 & 23.' },
      { line: 5, code: 'left_motor.forward()', kn: 'ಎಡ ಮೋಟಾರ್ ಮುಂದಕ್ಕೆ ಚಲಿಸಲು ಆದೇಶ ನೀಡುತ್ತದೆ.', en: 'Engages left motor forward.' },
      { line: 6, code: 'right_motor.forward()', kn: 'ಬಲ ಮೋಟಾರ್ ಮುಂದಕ್ಕೆ ಚಲಿಸಲು ಆದೇಶ ನೀಡುತ್ತದೆ.', en: 'Engages right motor forward.' },
      { line: 7, code: 'print("Robot Moving Forward")', kn: '"Robot Moving Forward" ಎಂದು ಮುದ್ರಿಸುತ್ತದೆ.', en: 'Prints Robot Moving Forward.' },
      { line: 8, code: 'sleep(5)', kn: '5 ಸೆಕೆಂಡುಗಳ ಕಾಲ ರೋಬೋಟ್ ಚಲಿಸಲು ಬಿಡುತ್ತದೆ.', en: 'Keeps robot moving for 5 seconds.' },
      { line: 9, code: 'left_motor.stop()', kn: 'ಎಡ ಮೋಟಾರ್ ನಿಲ್ಲಿಸುತ್ತದೆ.', en: 'Stops left motor.' },
      { line: 10, code: 'right_motor.stop()', kn: 'ಬಲ ಮೋಟಾರ್ ನಿಲ್ಲಿಸುತ್ತದೆ.', en: 'Stops right motor.' },
      { line: 11, code: 'print("Robot Stopped")', kn: '"Robot Stopped" ಎಂದು ಮುದ್ರಿಸುತ್ತದೆ.', en: 'Prints Robot Stopped.' }
    ],
    step6Predict: {
      prompt: {
        kn: 'ಈ ಪ್ರೋಗ್ರಾಂ ರನ್ ಮಾಡಿದಾಗ ಕನ್ಸೋಲ್‌ನಲ್ಲಿ ಮುದ್ರಿತವಾಗುವ ಸಂದೇಶಗಳ ಕ್ರಮವೇನು?',
        en: 'What sequence of messages will be printed to stdout when this program runs?'
      },
      options: [
        {
          textKn: 'ಮೊದಲು "Robot Moving Forward", 5 ಸೆಕೆಂಡ್ ನಂತರ "Robot Stopped"',
          textEn: 'First "Robot Moving Forward", then after 5s "Robot Stopped"',
          isCorrect: true,
          explanationKn: 'ಸರಿ! ಎರಡೂ ಮೋಟಾರ್ ಆನ್ ಆದಾಗ ಮೂವಿಂಗ್ ಬರುತ್ತದೆ, 5 ಸೆಕೆಂಡ್ ನಿದ್ರೆಯ ನಂತರ ಸ್ಟಾಪ್ ಬರುತ್ತದೆ.',
          explanationEn: 'Correct! Forward is printed before sleep(5); Stopped is printed after.'
        },
        {
          textKn: '"Robot Stopped" ಮಾತ್ರ ಪ್ರಿಂಟ್ ಆಗುತ್ತದೆ',
          textEn: 'Only "Robot Stopped" is printed',
          isCorrect: false,
          explanationKn: 'ತಪ್ಪು, ಮೊದಲೇ ಮೂವಿಂಗ್ ಪ್ರಿಂಟ್ ಆಗಿರುತ್ತದೆ.',
          explanationEn: 'Incorrect, both print statements are executed.'
        },
        {
          textKn: 'ಯಾವುದೂ ಪ್ರಿಂಟ್ ಆಗುವುದಿಲ್ಲ',
          textEn: 'Nothing is printed',
          isCorrect: false,
          explanationKn: 'ತಪ್ಪು, ಪ್ರೋಗ್ರಾಂನಲ್ಲಿ ಎರಡು print ಸ್ಟೇಟ್‌ಮೆಂಟ್‌ಗಳಿವೆ.',
          explanationEn: 'Incorrect, two print statements are present.'
        }
      ]
    },
    step7Run: {
      expectedStdout: `Robot Moving Forward
Robot Stopped`,
      isSimulation: true,
      simulationType: 'robot'
    },
    step8Challenge: [
      {
        id: 'q1',
        questionKn: 'ಬಲ ಮೋಟಾರ್ (Right motor) ಗಾಗಿ ಮ್ಯಾನುಯಲ್‌ನಲ್ಲಿ ನಿಗದಿಪಡಿಸಲಾದ GPIO ಪಿನ್‌ಗಳು ಯಾವುವು?',
        questionEn: 'Which GPIO pins are designated for the right motor in Ex. No: 30?',
        options: [
          { textKn: '17 ಮತ್ತು 18', textEn: '17 and 18', isCorrect: false },
          { textKn: '22 ಮತ್ತು 23', textEn: '22 and 23', isCorrect: true },
          { textKn: '5 ಮತ್ತು 6', textEn: '5 and 6', isCorrect: false }
        ],
        hintKn: '`right_motor = Motor(forward=22, backward=23)` ಸಾಲನ್ನು ನೋಡಿ.',
        hintEn: 'Look at line 4 in the code.',
        explanationKn: 'ಎಡ ಮೋಟಾರ್‌ಗೆ 17, 18 ಮತ್ತು ಬಲ ಮೋಟಾರ್‌ಗೆ 22, 23 ಪಿನ್‌ಗಳನ್ನು ಬಳಸಲಾಗಿದೆ.',
        explanationEn: 'Left motor is on pins 17, 18; Right motor is on pins 22, 23.'
      },
      {
        id: 'q2',
        questionKn: 'ರೋಬೋಟ್ ಅನ್ನು ಬಲಕ್ಕೆ (Right Turn) ತಿರುಗಿಸಬೇಕಾದರೆ ಚಕ್ರಗಳ ಸ್ಥಿತಿ ಹೇಗಿರಬೇಕು?',
        questionEn: 'To turn the robot right, how should the motors typically be driven?',
        options: [
          { textKn: 'ಎಡ ಮೋಟಾರ್ ಮುಂದಕ್ಕೆ (Left Forward), ಬಲ ಮೋಟಾರ್ ನಿಲ್ಲಿಸಬೇಕು (Right Stop)', textEn: 'Left motor forward, Right motor stopped', isCorrect: true },
          { textKn: 'ಎರಡೂ ಮೋಟಾರ್ ನಿಲ್ಲಿಸಬೇಕು', textEn: 'Both motors stopped', isCorrect: false },
          { textKn: 'ಬಲ ಮೋಟಾರ್ ಮಾತ್ರ ಮುಂದಕ್ಕೆ ಹೋಗಬೇಕು', textEn: 'Right motor forward only', isCorrect: false }
        ],
        hintKn: 'ನೀವು ಬಲಗಡೆ ತಿರುಗಬೇಕಾದರೆ ಎಡಗಾಲನ್ನು ಹೆಚ್ಚು ಮುಂದಿಡುತ್ತೀರಿ!',
        hintEn: 'Higher thrust on the left side swings the vehicle right.',
        explanationKn: 'ಎಡ ಚಕ್ರ ಓಡಿ ಬಲ ಚಕ್ರ ನಿಂತಾಗ ರೋಬೋಟ್ ಬಲಕ್ಕೆ ತಿರುಗುತ್ತದೆ (Differential steering).',
        explanationEn: 'Spinning the left wheel while holding the right wheel pivots the chassis to the right.'
      }
    ],
    practiceMode: {
      cloze: {
        instructionKn: 'ರೋಬೋಟ್ ಮೋಟಾರ್ ಪಿನ್‌ಗಳು ಮತ್ತು ಕಮಾಂಡ್‌ಗಳನ್ನು ಸರಿಯಾಗಿ ಭರ್ತಿ ಮಾಡಿ:',
        instructionEn: 'Complete the dual motor robot script:',
        codeTemplate: `left_motor = Motor(forward=17, backward=18)
right_motor = Motor(forward={{BLANK1}}, backward=23)
left_motor.{{BLANK2}}()
right_motor.forward()
sleep(5)
left_motor.{{BLANK3}}()
right_motor.stop()`,
        blanks: [
          { id: 'BLANK1', answer: '22', options: ['22', '17', '19', '25'] },
          { id: 'BLANK2', answer: 'forward', options: ['forward', 'backward', 'start', 'spin'] },
          { id: 'BLANK3', answer: 'stop', options: ['stop', 'end', 'kill', 'halt'] }
        ]
      },
      termMatches: [
        { term: 'left_motor.forward()', meaningKn: 'ಎಡ ಚಕ್ರ ಮುಂದಕ್ಕೆ', meaningEn: 'Left wheel forward' },
        { term: 'right_motor.forward()', meaningKn: 'ಬಲ ಚಕ್ರ ಮುಂದಕ್ಕೆ', meaningEn: 'Right wheel forward' },
        { term: 'right_motor.stop()', meaningKn: 'ಬಲ ಚಕ್ರ ನಿಲ್ಲು', meaningEn: 'Halt right wheel' }
      ]
    },
    testMode: {
      questions: [
        {
          id: 'v1',
          questionKn: 'ಡಿಫರೆನ್ಷಿಯಲ್ ಡ್ರೈವ್ ರೋಬೋಟ್‌ನಲ್ಲಿ ಎರಡೂ ಮೋಟಾರ್‌ಗಳು ಸಮಾನ ವೇಗದಲ್ಲಿ ಮುಂದಕ್ಕೆ ಚಲಿಸಿದರೆ ರೋಬೋಟ್‌ನ ದಿಕ್ಕು ಹೇಗಿರುತ್ತದೆ?',
          questionEn: 'In a differential drive robot, if both motors spin forward at equal speed, what is the path?',
          options: [
            { textKn: 'ನೇರ ರೇಖೆಯಲ್ಲಿ ಮುಂದಕ್ಕೆ (Straight line forward)', textEn: 'Straight line forward', isCorrect: true },
            { textKn: 'ವೃತ್ತಾಕಾರದಲ್ಲಿ ತಿರುಗುತ್ತದೆ (Circular spinning)', textEn: 'Spins in circles', isCorrect: false },
            { textKn: 'ಹಿಂದಕ್ಕೆ ಚಲಿಸುತ್ತದೆ (Backward)', textEn: 'Reverses backward', isCorrect: false }
          ],
          explanationKn: 'ಎರಡೂ ಚಕ್ರಗಳು ಸಮನಾಗಿ ಮುನ್ನಡೆದರೆ ವಾಹನ ನೇರವಾಗಿ ಚಲಿಸುತ್ತದೆ.',
          explanationEn: 'Equal forward velocity on both sides causes straight translation.'
        }
      ]
    },
    teacherNotes: {
      observationKn: 'ರೋಬೋಟಿಕ್ಸ್‌ನಲ್ಲಿ ಪಿನ್ ನಂಬರ್‌ಗಳು ಮದರ್‌ಬೋರ್ಡ್‌ಗೆ ನಿಖರವಾಗಿ ಸರಿಹೊಂದಬೇಕು. ಮ್ಯಾನುಯಲ್‌ನ Fig. 9.7 ರ ಪ್ರಕಾರ ಪಿನ್ 17, 18, 22, 23 ಗಳನ್ನು ಪಾಲಿಸಲಾಗಿದೆ.',
      observationEn: 'Matches the exact pin layout from Week 9 Ex 30 in the manual.',
      labTipsKn: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಬ್ರೌಸರ್‌ನಲ್ಲಿ 3D/ಟಾಪ್ ವ್ಯೂ ಸಿಮ್ಯುಲೇಶನ್ ವೀಕ್ಷಿಸಲು ತಿಳಿಸಿ.',
      labTipsEn: 'Highlight the interactive 2D workshop rover animation in the run step.'
    }
  },

  // LEVEL 08
  {
    id: 8,
    exerciseNumber: 31,
    weekNumber: 10,
    weekTitle: {
      kn: 'ವಾರ 10: ಸಂಖ್ಯಾಶಾಸ್ತ್ರೀಯ ಗುಣಮಟ್ಟ ನಿಯಂತ್ರಣ (SQC)',
      en: 'Week 10: Statistical Quality Control (Sqc)'
    },
    title: {
      kn: 'ಲೆವೆಲ್ 08 – ಗುಣಮಟ್ಟ ನಿಯಂತ್ರಣ ಇನ್ಸ್‌ಪೆಕ್ಟರ್ (Quality Control Inspector)',
      en: 'Level 08 – Quality Control Inspector'
    },
    subtitle: {
      kn: 'ಮ್ಯಾಟ್‌ಪ್ಲಾಟ್‌ಲಿಬ್ ಬಳಸಿ X-bar (ಸರಾಸರಿ) ಮತ್ತು R (ವ್ಯಾಪ್ತಿ) ಚಾರ್ಟ್‌ಗಳು',
      en: 'Sample Average (X-bar) and Sample Range (R) Charts Using Matplotlib'
    },
    badgeName: {
      kn: 'ಕ್ವಾಲಿಟಿ ಇನ್ಸ್‌ಪೆಕ್ಟರ್ (Quality Inspector)',
      en: 'Quality Inspector'
    },
    badgeIcon: 'LineChart',
    category: 'Quality Control',
    step1What: {
      description: {
        kn: 'ಈ ಹಂತದಲ್ಲಿ ನಾವು ಕಾರ್ಖಾನೆಯ ಉತ್ಪಾದನಾ ಗುಣಮಟ್ಟವನ್ನು ಅಳೆಯಲು "X-bar ಚಾರ್ಟ್" (ಮಾದರಿ ಸರಾಸರಿ) ಮತ್ತು "R ಚಾರ್ಟ್" (ಮಾದರಿ ವ್ಯಾಪ್ತಿ - Range) ಗಳನ್ನು ಪೈಥಾನ್ Matplotlib ಲೈಬ್ರರಿ ಬಳಸಿ ಗ್ರಾಫ್ ರೂಪದಲ್ಲಿ ರಚಿಸುತ್ತೇವೆ.',
        en: 'We compute sample averages (X-bar) and sample ranges (R = max - min) for 5 production batches of 5 components each, plotting both charts using Matplotlib.'
      },
      keyPoints: [
        { kn: '`average = sum(sample) / len(sample)`: 5 ಅಳತೆಗಳ ಸರಾಸರಿ (Mean) ಲೆಕ್ಕಾಚಾರ.', en: 'Calculates the batch mean value.' },
        { kn: '`range_value = max(sample) - min(sample)`: ಗರಿಷ್ಠ ಮತ್ತು ಕನಿಷ್ಠ ಅಳತೆಯ ವ್ಯತ್ಯಾಸ (Range).', en: 'Computes spread/dispersion (max - min).' },
        { kn: '`plt.plot(sample_no, xbar)`: ಎಕ್ಸ್-ಬಾರ್ ಚಾರ್ಟ್ ಗ್ರಾಫ್ ರಚಿಸುತ್ತದೆ.', en: 'Plots X-bar chart.' }
      ]
    },
    step2Engineering: {
      title: {
        kn: 'ಮೆಕ್ಯಾನಿಕಲ್ ಉತ್ಪಾದನಾ ಗುಣಮಟ್ಟದಲ್ಲಿ SQC ಪಾತ್ರ',
        en: 'Statistical Quality Control in Manufacturing'
      },
      analogy: {
        kn: 'ವರ್ಕ್‌ಶಾಪ್‌ನಲ್ಲಿ ನೀವು ಲೆಟ್ ಮೆಷಿನ್‌ನಲ್ಲಿ 25 ಶಾಫ್ಟ್‌ಗಳನ್ನು (Shafts) ಟರ್ನಿಂಗ್ ಮಾಡುತ್ತಿದ್ದೀರಿ. ಪ್ರತಿ 5 ಶಾಫ್ಟ್‌ಗಳ ಒಂದು ಗುಂಪು (Sample) ಮಾಡಿ ಅವುಗಳ ವ್ಯಾಸವನ್ನು (Diameter) ವರ್ನಿಯರ್ ಕ್ಯಾಲಿಪರ್‌ನಿಂದ ಅಳೆಯುತ್ತೀರಿ. ಎಲ್ಲಾ ಶಾಫ್ಟ್‌ಗಳು ಒಂದೇ ಅಳತೆಯಲ್ಲಿ ತಯಾರಾಗುತ್ತಿವೆಯೇ ಅಥವಾ ಮೆಷಿನ್ ಟೂಲ್ ಸವೆದು ಹೋಗಿ ಅಳತೆ ತಪ್ಪುತ್ತಿದೆಯೇ ಎಂದು ಪತ್ತೆಹಚ್ಚಲು ಈ ಚಾರ್ಟ್‌ಗಳು ಅನಿವಾರ್ಯ!',
        en: 'In mass production of engine piston pins or shafts, dimensional consistency is paramount. Quality engineers take random samples of 5 parts every hour, plotting X-bar to check process centering and R chart to monitor machine tool wear or vibration!'
      },
      industryUseCase: {
        kn: 'ಸಿಎನ್‌ಸಿ ಮೆಷಿನಿಂಗ್ ಬಿಡಿಭಾಗಗಳ ಸಹಿಷ್ಣುತೆ (Tolerance) ಮತ್ತು ಕಂಟ್ರೋಲ್ ಚಾರ್ಟ್ ತಪಾಸಣೆ.',
        en: 'Production Metrology & Tolerance Verification in Automotive Machining.'
      },
      icon: 'BarChart3'
    },
    step3Python: {
      title: {
        kn: 'ಡೇಟಾ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಗ್ರಾಫ್ ಪ್ಲಾಟಿಂಗ್',
        en: 'Data Analysis & Chart Plotting'
      },
      summary: {
        kn: 'ಪಟ್ಟಿಗಳ ಪಟ್ಟಿ (Nested List) ಯಿಂದ ಡೇಟಾ ಓದಿ, ಸರಾಸರಿ ಮತ್ತು ರೇಂಜ್ ಕಂಡುಹಿಡಿದು, Matplotlib ಮೂಲಕ ಪ್ರದರ್ಶಿಸುವುದು.',
        en: 'Iterates through nested sample lists to calculate metrics and plot graphs.'
      },
      rules: [
        { kn: '1. `sum(sample) / len(sample)`: ಮಾದರಿಯ ಸರಾಸರಿ ನೀಡುತ್ತದೆ.', en: '1. Computes arithmetic average of sample.' },
        { kn: '2. `max(sample) - min(sample)`: ಆ ಮಾದರಿಯ ಗರಿಷ್ಠ - ಕನಿಷ್ಠ ವ್ಯತ್ಯಾಸ (R).', en: '2. Computes sample range.' },
        { kn: '3. `plt.plot(..., marker=\'o\')`: ಬಿಂದುಗಳನ್ನು ವೃತ್ತಾಕಾರದ ಗುರುತಿನೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುತ್ತದೆ.', en: '3. Plots points with circular markers.' },
        { kn: '4. `plt.show()`: ಸಿದ್ಧವಾದ ಗ್ರಾಫ್ ಅನ್ನು ಪರದೆಯ ಮೇಲೆ ಪ್ರದರ್ಶಿಸುತ್ತದೆ.', en: '4. Displays the Matplotlib figure.' }
      ],
      terms: [
        { term: 'X-bar (ಎಕ್ಸ್-ಬಾರ್)', meaningKn: 'ಮಾದರಿಯ ಸರಾಸರಿ ಅಳತೆ (Sample Average)', meaningEn: 'Sample mean' },
        { term: 'R (ರೇಂಜ್)', meaningKn: 'ವ್ಯಾಪ್ತಿ (ಗರಿಷ್ಠ ಮೌಲ್ಯ - ಕನಿಷ್ಠ ಮೌಲ್ಯ)', meaningEn: 'Sample range (max - min)' },
        { term: 'Matplotlib', meaningKn: 'ಪೈಥಾನ್‌ನಲ್ಲಿ ಗ್ರಾಫ್ ಬಿಡಿಸುವ ಪ್ರಸಿದ್ಧ ಲೈಬ್ರರಿ', meaningEn: 'Python 2D plotting library' }
      ]
    },
    step4Code: {
      originalCode: `import matplotlib.pyplot as plt
samples = [
[10, 11, 12, 12, 11],
[11, 12, 13, 12, 12],
[11, 12, 13, 14, 12],
[12, 13, 14, 13, 13],
[11, 12, 13, 12, 11],
]
sample_no = []
xbar = []
r = []
for sample in samples :
average = sum(sample) / len(sample)
range_value = max(sample) - min(sample)
sample_no.append(sample)
xbar.append(average)
r.append(range_value)
print("Sample =", sample)
print("Average =", average)
print("Range =", range_value)
plt.plot(sample_no, xbar, marker='o')
plt.title("X Bar Chart")
plt.xlabel("Sample Number")
plt.ylabel("Average")
plt.show()
plt.plot(sample_no, r, marker='o')
plt.title("R Chart")
plt.xlabel("Sample Number")
plt.ylabel("Range")
plt.show()`
    },
    step5LineByLine: [
      { line: 1, code: 'import matplotlib.pyplot as plt', kn: 'ಗ್ರಾಫ್ ಪ್ಲಾಟ್ ಮಾಡಲು `matplotlib.pyplot` ಅನ್ನು `plt` ಹೆಸರಿನಲ್ಲಿ ತರುತ್ತದೆ.', en: 'Imports matplotlib pyplot interface as plt.' },
      { line: 2, code: 'samples = [...]', kn: '5 ಮಾದರಿಗಳ (ಪ್ರತಿಯೊಂದರಲ್ಲೂ 5 ಅಳತೆಗಳು) ದತ್ತಾಂಶ ಪಟ್ಟಿ.', en: 'Defines 5 samples of 5 measurements each.' },
      { line: 9, code: 'sample_no = [] / xbar = [] / r = []', kn: 'ಸ್ಯಾಂಪಲ್ ಸಂಖ್ಯೆ, ಸರಾಸರಿ ಮತ್ತು ರೇಂಜ್‌ಗಳನ್ನು ಶೇಖರಿಸಲು ಖಾಲಿ ಪಟ್ಟಿಗಳು.', en: 'Initializes empty collector lists.' },
      { line: 13, code: 'for sample in samples :', kn: 'ಪ್ರತಿ ಸ್ಯಾಂಪಲ್ ಗುಂಪಿಗೆ ಲೂಪ್ ಚಲಿಸುತ್ತದೆ.', en: 'Loops over each 5-item sample.' },
      { line: 14, code: 'average = sum(sample) / len(sample)', kn: 'ಮಾದರಿಯ ಸರಾಸರಿ (X-bar) ಲೆಕ್ಕಾಚಾರ ಮಾಡುತ್ತದೆ.', en: 'Computes sample average.' },
      { line: 15, code: 'range_value = max(sample) - min(sample)', kn: 'ಮಾದರಿಯ ರೇಂಜ್ (ಗರಿಷ್ಠ - ಕನಿಷ್ಠ) ಲೆಕ್ಕಾಚಾರ ಮಾಡುತ್ತದೆ.', en: 'Computes range as max minus min.' },
      { line: 16, code: 'sample_no.append(sample)', kn: 'ಮ್ಯಾನುಯಲ್‌ನಲ್ಲಿರುವ ಸಾಲು: ಸ್ಯಾಂಪಲ್ ಅನ್ನು ಪಟ್ಟಿಗೆ ಸೇರಿಸುತ್ತದೆ.', en: 'Manual code appends sample to sample_no.' },
      { line: 17, code: 'xbar.append(average)', kn: 'ಸರಾಸರಿ ಮೌಲ್ಯವನ್ನು xbar ಪಟ್ಟಿಗೆ ಸೇರಿಸುತ್ತದೆ.', en: 'Appends average to xbar list.' },
      { line: 18, code: 'r.append(range_value)', kn: 'ರೇಂಜ್ ಮೌಲ್ಯವನ್ನು r ಪಟ್ಟಿಗೆ ಸೇರಿಸುತ್ತದೆ.', en: 'Appends range_value to r list.' },
      { line: 19, code: 'print(...)', kn: 'ಸ್ಯಾಂಪಲ್, ಸರಾಸರಿ ಮತ್ತು ರೇಂಜ್ ಮೌಲ್ಯಗಳನ್ನು ಕನ್ಸೋಲ್‌ನಲ್ಲಿ ಮುದ್ರಿಸುತ್ತದೆ.', en: 'Prints sample, average, and range.' },
      { line: 22, code: 'plt.plot(sample_no, xbar, marker=\'o\')', kn: 'X-Bar ಚಾರ್ಟ್ ಗ್ರಾಫ್ ಬಿಡಿಸುತ್ತದೆ.', en: 'Plots X-bar chart.' },
      { line: 27, code: 'plt.plot(sample_no, r, marker=\'o\')', kn: 'R ಚಾರ್ಟ್ ಗ್ರಾಫ್ ಬಿಡಿಸುತ್ತದೆ.', en: 'Plots R chart.' }
    ],
    step6Predict: {
      prompt: {
        kn: 'ಮೊದಲ ಸ್ಯಾಂಪಲ್ [10, 11, 12, 12, 11] ರ ಸರಾಸರಿ (Average) ಮತ್ತು ರೇಂಜ್ (Range) ಎಷ್ಟು?',
        en: 'For the first sample [10, 11, 12, 12, 11], what is the Average and Range?'
      },
      options: [
        {
          textKn: 'Average = 11.2, Range = 2',
          textEn: 'Average = 11.2, Range = 2',
          isCorrect: true,
          explanationKn: 'ಸರಿ! ಮೊತ್ತ = 10+11+12+12+11 = 56. ಸರಾಸರಿ = 56 / 5 = 11.2. ರೇಂಜ್ = 12 - 10 = 2.',
          explanationEn: 'Correct! Sum = 56, Average = 56/5 = 11.2, Range = 12 - 10 = 2.'
        },
        {
          textKn: 'Average = 10.0, Range = 5',
          textEn: 'Average = 10.0, Range = 5',
          isCorrect: false,
          explanationKn: 'ತಪ್ಪು ಲೆಕ್ಕಾಚಾರ.',
          explanationEn: 'Incorrect values.'
        },
        {
          textKn: 'Average = 12.0, Range = 0',
          textEn: 'Average = 12.0, Range = 0',
          isCorrect: false,
          explanationKn: 'ತಪ್ಪು, ಎಲ್ಲಾ ಮೌಲ್ಯಗಳು 12 ಅಲ್ಲ.',
          explanationEn: 'Incorrect, not all elements are 12.'
        }
      ]
    },
    step7Run: {
      expectedStdout: `Sample = [10, 11, 12, 12, 11]
Average = 11.2
Range = 2
Sample = [11, 12, 13, 12, 12]
Average = 12.0
Range = 2
Sample = [11, 12, 13, 14, 12]
Average = 12.4
Range = 3
Sample = [12, 13, 14, 13, 13]
Average = 13.0
Range = 2
Sample = [11, 12, 13, 12, 11]
Average = 11.8
Range = 2`,
      isSimulation: true,
      simulationType: 'xbar_r'
    },
    step8Challenge: [
      {
        id: 'q1',
        questionKn: 'ಸ್ಯಾಂಪಲ್ ವ್ಯಾಪ್ತಿಯನ್ನು (Range) ಕಂಡುಹಿಡಿಯಲು ಬಳಸುವ ಗಣಿತ ಸೂತ್ರ ಯಾವುದು?',
        questionEn: 'What formula is used to calculate the Sample Range (R)?',
        options: [
          { textKn: 'max(sample) - min(sample)', textEn: 'max(sample) - min(sample)', isCorrect: true },
          { textKn: 'sum(sample) / len(sample)', textEn: 'sum(sample) / len(sample)', isCorrect: false },
          { textKn: 'max(sample) + min(sample)', textEn: 'max(sample) + min(sample)', isCorrect: false }
        ],
        hintKn: 'ಅತಿ ದೊಡ್ಡ ಮೌಲ್ಯದಿಂದ ಅತಿ ಚಿಕ್ಕ ಮೌಲ್ಯವನ್ನು ಕಳೆಯಬೇಕು.',
        hintEn: 'Maximum minus minimum value.',
        explanationKn: 'ವ್ಯಾಪ್ತಿ (Range) = ಗರಿಷ್ಠ ಬೆಲೆ - ಕನಿಷ್ಠ ಬೆಲೆ.',
        explanationEn: 'Range is the difference between maximum and minimum values.'
      },
      {
        id: 'q2',
        questionKn: 'ಪೈಥಾನ್‌ನಲ್ಲಿ ಗ್ರಾಫ್‌ಗಳಿಗೆ ಶೀರ್ಷಿಕೆ (Title) ನೀಡಲು ಯಾವ ಕಮಾಂಡ್ ಬಳಸುತ್ತೇವೆ?',
        questionEn: 'Which Matplotlib function assigns a heading title to the chart?',
        options: [
          { textKn: 'plt.title("...")', textEn: 'plt.title("...")', isCorrect: true },
          { textKn: 'plt.heading("...")', textEn: 'plt.heading("...")', isCorrect: false },
          { textKn: 'plt.label("...")', textEn: 'plt.label("...")', isCorrect: false }
        ],
        hintKn: '"Title" ಎಂಬ ಪದವನ್ನೇ ನೇರವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ.',
        hintEn: 'Directly uses the word title.',
        explanationKn: '`plt.title()` ಗ್ರಾಫ್‌ಗೆ ಶೀರ್ಷಿಕೆ ನೀಡುತ್ತದೆ.',
        explanationEn: '`plt.title()` sets the chart title.'
      }
    ],
    practiceMode: {
      cloze: {
        instructionKn: 'X-bar ಮತ್ತು R ಸೂತ್ರಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ:',
        instructionEn: 'Complete the statistical quality formulas:',
        codeTemplate: `for sample in samples :
    average = sum(sample) / {{BLANK1}}(sample)
    range_value = {{BLANK2}}(sample) - min(sample)
    xbar.append(average)
    r.append(range_value)
plt.plot([1,2,3,4,5], xbar, marker={{BLANK3}})`,
        blanks: [
          { id: 'BLANK1', answer: 'len', options: ['len', 'count', 'size', 'total'] },
          { id: 'BLANK2', answer: 'max', options: ['max', 'high', 'peak', 'top'] },
          { id: 'BLANK3', answer: "'o'", options: ["'o'", "'x'", "'*'", "'-'"] }
        ]
      },
      termMatches: [
        { term: 'average', meaningKn: 'ಮಾದರಿಯ ಸರಾಸರಿ', meaningEn: 'Sample mean' },
        { term: 'range_value', meaningKn: 'ಗರಿಷ್ಠ ಮತ್ತು ಕನಿಷ್ಠದ ವ್ಯತ್ಯಾಸ', meaningEn: 'Max minus min' },
        { term: 'plt.show()', meaningKn: 'ಗ್ರಾಫ್ ಪ್ರದರ್ಶಿಸು', meaningEn: 'Display chart' }
      ]
    },
    testMode: {
      questions: [
        {
          id: 'v1',
          questionKn: 'X-bar ಚಾರ್ಟ್ ಮೆಕ್ಯಾನಿಕಲ್ ಉತ್ಪಾದನೆಯಲ್ಲಿ ಯಾವುದನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲು ಬಳಸಲಾಗುತ್ತದೆ?',
          questionEn: 'What primary manufacturing parameter does an X-bar chart monitor?',
          options: [
            { textKn: 'ಉತ್ಪನ್ನದ ಸರಾಸರಿ ಅಳತೆ ಮತ್ತು ಪ್ರಕ್ರಿಯೆಯ ಕೇಂದ್ರತೆಯನ್ನು (Central tendency)', textEn: 'Process average centering and dimensions', isCorrect: true },
            { textKn: 'ಕಾರ್ಖಾನೆಯ ವಿದ್ಯುತ್ ಬಿಲ್', textEn: 'Factory electricity bill', isCorrect: false },
            { textKn: 'ಕೆಲಸಗಾರರ ಹಾಜರಾತಿ', textEn: 'Worker attendance', isCorrect: false }
          ],
          explanationKn: 'X-bar ಚಾರ್ಟ್ ಭಾಗಗಳ ಸರಾಸರಿ ಅಳತೆ ನಿಗದಿತ ಗುರಿಯಲ್ಲಿದೆಯೇ ಎಂದು ಪರೀಕ್ಷಿಸುತ್ತದೆ.',
          explanationEn: 'X-bar charts track process mean stability over time.'
        }
      ]
    },
    teacherNotes: {
      observationKn: 'ಶಿಕ್ಷಕರ ಗಮನಕ್ಕೆ (Teacher Note / Manual Bug Alert): ಲ್ಯಾಬ್ ಮ್ಯಾನುಯಲ್‌ನ ಲೈನ್ 16 ರಲ್ಲಿ `sample_no.append(sample)` ಎಂದು ಮುದ್ರಿತವಾಗಿದೆ! ವಾಸ್ತವವಾಗಿ ಇದು ಸ್ಯಾಂಪಲ್ ನಂಬರ್ (1, 2, 3, 4, 5) ಅನ್ನು ಅಪೆಂಡ್ ಮಾಡಬೇಕಿತ್ತು ಅಥವಾ `sample_no = [1, 2, 3, 4, 5]` ಎಂದು ನೇರವಾಗಿ ನೀಡಬೇಕಿತ್ತು (ಮುಂದಿನ ಎಕ್ಸರ್‌ಸೈಜ್ 33 ರಲ್ಲಿ ಸರಿಪಡಿಸಿದಂತೆ). ನಮ್ಮ ಕಟ್ಟುನಿಟ್ಟಿನ ನಿಯಮದಂತೆ ನಾವು ಮೂಲ ಮ್ಯಾನುಯಲ್ ಕೋಡ್ ಅನ್ನು ಯಥಾವತ್ತಾಗಿ ಇರಿಸಿ, ಶಿಕ್ಷಕರಿಗೆ ಈ ಅಂಶವನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ತೋರಿಸಿದ್ದೇವೆ!',
      observationEn: 'TEACHER BUG ALERT: In the original printed manual line 16, sample_no.append(sample) appends the entire 5-element list instead of sample index (1, 2, 3, 4, 5). In Ex 33 the manual author realized this and directly assigned sample_no = [1, 2, 3, 4, 5]. As per rule 9, we preserve the original printed code verbatim and explain this exact finding to the instructor!',
      labTipsKn: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಪರೀಕ್ಷೆಯಲ್ಲಿ ಬರೆಯಲು ಮ್ಯಾನುಯಲ್ ಕೋಡ್ ಅನ್ನೇ ಬರೆಯಲು ತಿಳಿಸಿ, ಆದರೆ ಪ್ರಾಯೋಗಿಕವಾಗಿ ಸ್ಯಾಂಪಲ್ ಸಂಖ್ಯೆ 1 ರಿಂದ 5 ಎಂದು ನೆನಪಿಡಲು ಹೇಳಿ.',
      labTipsEn: 'Advise students that in their lab record they write the manual code, but understand that sample numbers represent 1 to 5.'
    }
  },

  // LEVEL 09
  {
    id: 9,
    exerciseNumber: 32,
    weekNumber: 11,
    weekTitle: {
      kn: 'ವಾರ 11: ಸಂಖ್ಯಾಶಾಸ್ತ್ರೀಯ ಪ್ರಕ್ರಿಯೆ ನಿಯಂತ್ರಣದ ಪರಿಚಯ (SPC)',
      en: 'Week 11: Introduction To Statistical Process Control (Spc)'
    },
    title: {
      kn: 'ಲೆವೆಲ್ 09 – ಸಂಖ್ಯಾಶಾಸ್ತ್ರ ಮಾಸ್ಟರ್ (Statistics Master)',
      en: 'Level 09 – Statistics Master'
    },
    subtitle: {
      kn: 'ಸರಾಸರಿ (Mean), ವ್ಯತ್ಯಾಸ (Variance) ಮತ್ತು ಪ್ರಮಾಣಿತ ವಿಚಲನ (Standard Deviation)',
      en: 'Calculate Mean, Variance and Standard Deviation'
    },
    badgeName: {
      kn: 'ಸ್ಟ್ಯಾಟಿಸ್ಟಿಕ್ಸ್ ಮಾಸ್ಟರ್ (Statistics Master)',
      en: 'Statistics Master'
    },
    badgeIcon: 'Calculator',
    category: 'Quality Control',
    step1What: {
      description: {
        kn: 'ಈ ಹಂತದಲ್ಲಿ ನಾವು ಪೈಥಾನ್‌ನ `statistics` ಮಾಡ್ಯೂಲ್ ಬಳಸಿ ಉತ್ಪಾದನಾ ಅಳತೆಗಳ [10, 12, 14, 16, 18] ಮೂರು ಮುಖ್ಯ ಸಂಖ್ಯಾಶಾಸ್ತ್ರೀಯ ಮೌಲ್ಯಗಳನ್ನು ಲೆಕ್ಕ ಹಾಕುತ್ತೇವೆ: 1. Mean (ಸರಾಸರಿ), 2. Variance (ವ್ಯತ್ಯಾಸ), 3. Standard Deviation (ಪ್ರಮಾಣಿತ ವಿಚಲನ).',
        en: 'We calculate three foundational statistical measures for mechanical measurement dataset [10, 12, 14, 16, 18] using Python statistics module: Mean, Variance, and Standard Deviation.'
      },
      keyPoints: [
        { kn: '`statistics.mean(data)`: ದತ್ತಾಂಶದ ಅಂಕಗಣಿತದ ಸರಾಸರಿ ಕಂಡುಹಿಡಿಯುತ್ತದೆ.', en: 'Computes arithmetic mean of the dataset.' },
        { kn: '`statistics.variance(data)`: ಅಳತೆಗಳು ಸರಾಸರಿಯಿಂದ ಎಷ್ಟು ವ್ಯತ್ಯಾಸಗೊಂಡಿವೆ ಎಂದು ತಿಳಿಸುತ್ತದೆ.', en: 'Measures data dispersion/spread.' },
        { kn: '`round(std, 2)`: ಪ್ರಮಾಣಿತ ವಿಚಲನವನ್ನು 2 ದಶಮಾಂಶ ಸ್ಥಾನಗಳಿಗೆ ಸುತ್ತುಗೊಳಿಸುತ್ತದೆ.', en: 'Rounds standard deviation to 2 decimal places.' }
      ]
    },
    step2Engineering: {
      title: {
        kn: 'ಉತ್ಪಾದನಾ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ ಪ್ರಮಾಣಿತ ವಿಚಲನದ ಪ್ರಾಮುಖ್ಯತೆ',
        en: 'Metrology & Standard Deviation Significance'
      },
      analogy: {
        kn: 'ಕಾರ್ಖಾನೆಯಲ್ಲಿ ಗೇರ್ ಹಲ್ಲುಗಳ (Gear Teeth) ದಪ್ಪವನ್ನು ಅಳೆಯುತ್ತಿದ್ದೀರಿ ಎಂದುಕೊಳ್ಳಿ. ಸರಾಸರಿ (Mean) ಸರಿಯಾಗಿದ್ದರೂ, ಕೆಲವು ಹಲ್ಲುಗಳು ಅತಿ ದಪ್ಪ ಮತ್ತು ಕೆಲವು ಅತಿ ತೆಳುವಾಗಿದ್ದರೆ ಗೇರ್ ಸದ್ದು ಮಾಡುತ್ತದೆ ಅಥವಾ ಮುರಿದು ಬೀಳುತ್ತದೆ! ಪ್ರಮಾಣಿತ ವಿಚಲನ (Standard Deviation) ಕಡಿಮೆಯಿದ್ದಷ್ಟೂ ಯಂತ್ರದ ನಿಖರತೆ (Precision) ಮತ್ತು ಗುಣಮಟ್ಟ ಅತ್ಯುನ್ನತವಾಗಿರುತ್ತದೆ!',
        en: 'Suppose you turn 100 cylinder liners. Even if the average diameter is correct (14 mm), if individual parts deviate wildly between 10 mm and 18 mm, pistons will jam! A lower Standard Deviation signifies superior machine repeatability and Six Sigma quality!'
      },
      industryUseCase: {
        kn: 'ಸಿಕ್ಸ್ ಸಿಗ್ಮಾ (Six Sigma) ಮತ್ತು ಸಿಎನ್‌ಸಿ ಯಂತ್ರದ ಪ್ರಕ್ರಿಯೆ ಸಾಮರ್ಥ್ಯ (Process Capability Cp, Cpk).',
        en: 'Six Sigma Quality, Process Capability (Cp, Cpk) & Metrology.'
      },
      icon: 'Sliders'
    },
    step3Python: {
      title: {
        kn: 'ಪೈಥಾನ್ ಸ್ಟ್ಯಾಟಿಸ್ಟಿಕ್ಸ್ ಲೈಬ್ರರಿ',
        en: 'Python Statistics Module Functions'
      },
      summary: {
        kn: 'ಸಂಕೀರ್ಣ ಗಣಿತ ಸೂತ್ರಗಳನ್ನು ಕೈಯಿಂದ ಬಿಡಿಸದೇ ಕೇವಲ ಒಂದೊಂದು ಲೈನ್ ಕಮಾಂಡ್‌ಗಳಿಂದ ಕಂಡುಹಿಡಿಯಬಹುದು.',
        en: 'One-line built-in functions compute statistical metrics instantly.'
      },
      rules: [
        { kn: '1. `import statistics`: ಸಂಖ್ಯಾಶಾಸ್ತ್ರ ಟೂಲ್‌ಗಳನ್ನು ಲೋಡ್ ಮಾಡುತ್ತದೆ.', en: '1. Imports the statistics module.' },
        { kn: '2. `statistics.mean(data)`: ಸರಾಸರಿ ಮೌಲ್ಯ ನೀಡುತ್ತದೆ (ಇಲ್ಲಿ 14).', en: '2. Calculates mean (14 in this dataset).' },
        { kn: '3. `statistics.variance(data)`: ವ್ಯತ್ಯಾಸ ನೀಡುತ್ತದೆ (ಇಲ್ಲಿ 10).', en: '3. Calculates sample variance (10.0).' },
        { kn: '4. `round(std, 2)`: 3.16227... ಮೌಲ್ಯವನ್ನು 3.16 ಎಂದು ಸುಲಭವಾಗಿ ಓದಲು ಸರಿಪಡಿಸುತ್ತದೆ.', en: '4. Rounds 3.162277... to clean 3.16.' }
      ],
      terms: [
        { term: 'Mean', meaningKn: 'ಸರಾಸರಿ (ಎಲ್ಲಾ ಮೌಲ್ಯಗಳ ಮೊತ್ತ ÷ ಸಂಖ್ಯೆ)', meaningEn: 'Arithmetic average' },
        { term: 'Variance', meaningKn: 'ಮೌಲ್ಯಗಳ ಪ್ರಸರಣದ ಅಳತೆ (ಸರಾಸರಿಯಿಂದ ವರ್ಗ ವ್ಯತ್ಯಾಸ)', meaningEn: 'Square of standard deviation' },
        { term: 'Standard Deviation', meaningKn: 'ಪ್ರಮಾಣಿತ ವಿಚಲನ (Variance ನ ವರ್ಗಮೂಲ)', meaningEn: 'Root of variance; measure of dispersion' },
        { term: 'round()', meaningKn: 'ದಶಮಾಂಶ ಸ್ಥಾನಗಳನ್ನು ಸೀಮಿತಗೊಳಿಸುವುದು', meaningEn: 'Rounds number to specified digits' }
      ]
    },
    step4Code: {
      originalCode: `import statistics
data = [10, 12, 14, 16, 18]
mean = statistics.mean(data)
variance = statistics.variance(data)
std = statistics.stdev(data)
print("Mean =", mean)
print("Variance =", variance)
print("Standard Deviation =", round(std, 2))`
    },
    step5LineByLine: [
      { line: 1, code: 'import statistics', kn: 'ಪೈಥಾನ್‌ನ ಇನ್‌ಬಿಲ್ಟ್ `statistics` ಮಾಡ್ಯೂಲ್ ತರುತ್ತದೆ.', en: 'Imports statistics module.' },
      { line: 2, code: 'data = [10, 12, 14, 16, 18]', kn: '5 ಅಳತೆಗಳ ದತ್ತಾಂಶ ಪಟ್ಟಿ ರಚಿಸುತ್ತದೆ.', en: 'Defines 5 data point measurements.' },
      { line: 3, code: 'mean = statistics.mean(data)', kn: 'ದತ್ತಾಂಶದ ಸರಾಸರಿ (Mean) ಲೆಕ್ಕ ಹಾಕುತ್ತದೆ: (10+12+14+16+18)/5 = 14.', en: 'Calculates mean: 70/5 = 14.' },
      { line: 4, code: 'variance = statistics.variance(data)', kn: 'ಮಾದರಿ ವ್ಯತ್ಯಾಸ (Variance) ಲೆಕ್ಕ ಹಾಕುತ್ತದೆ = 10.', en: 'Calculates sample variance = 10.' },
      { line: 5, code: 'std = statistics.stdev(data)', kn: 'ಪ್ರಮಾಣಿತ ವಿಚಲನ (Standard Deviation) ಲೆಕ್ಕ ಹಾಕುತ್ತದೆ = √10 ≈ 3.162277.', en: 'Calculates sample standard deviation = sqrt(10).' },
      { line: 6, code: 'print("Mean =", mean)', kn: '"Mean = 14" ಎಂದು ಪ್ರಿಂಟ್ ಮಾಡುತ್ತದೆ.', en: 'Prints Mean = 14.' },
      { line: 7, code: 'print("Variance =", variance)', kn: '"Variance = 10" ಎಂದು ಪ್ರಿಂಟ್ ಮಾಡುತ್ತದೆ.', en: 'Prints Variance = 10.' },
      { line: 8, code: 'print("Standard Deviation =", round(std, 2))', kn: '"Standard Deviation = 3.16" ಎಂದು ಪ್ರಿಂಟ್ ಮಾಡುತ್ತದೆ.', en: 'Prints Standard Deviation = 3.16.' }
    ],
    step6Predict: {
      prompt: {
        kn: '[10, 12, 14, 16, 18] ಸಂಖ್ಯೆಗಳ ಸರಾಸರಿ (Mean) ಎಷ್ಟು ಬರುತ್ತದೆ?',
        en: 'What is the Mean of [10, 12, 14, 16, 18]?'
      },
      options: [
        {
          textKn: 'Mean = 14',
          textEn: 'Mean = 14',
          isCorrect: true,
          explanationKn: 'ಸರಿ! ಒಟ್ಟು ಮೊತ್ತ 70 ÷ 5 = 14.',
          explanationEn: 'Correct! Sum 70 / 5 = 14.'
        },
        {
          textKn: 'Mean = 12',
          textEn: 'Mean = 12',
          isCorrect: false,
          explanationKn: 'ತಪ್ಪು, 14 ಮಧ್ಯದ ಸರಾಸರಿ ಮೌಲ್ಯವಾಗಿದೆ.',
          explanationEn: 'Incorrect.'
        },
        {
          textKn: 'Mean = 70',
          textEn: 'Mean = 70',
          isCorrect: false,
          explanationKn: '70 ಎಂಬುದು ಒಟ್ಟು ಮೊತ್ತ, ಸರಾಸರಿಯಲ್ಲ.',
          explanationEn: '70 is the sum, not the mean.'
        }
      ]
    },
    step7Run: {
      expectedStdout: `Mean = 14
Variance = 10
Standard Deviation = 3.16`,
      isSimulation: false,
      simulationType: 'stats'
    },
    step8Challenge: [
      {
        id: 'q1',
        questionKn: 'ಪ್ರಮಾಣಿತ ವಿಚಲನ (Standard Deviation) ಮತ್ತು ವ್ಯತ್ಯಾಸ (Variance) ನಡುವಿನ ಸಂಬಂಧವೇನು?',
        questionEn: 'What is the mathematical relationship between Standard Deviation and Variance?',
        options: [
          { textKn: 'Standard Deviation = Variance ನ ವರ್ಗಮೂಲ (Square root)', textEn: 'Standard Deviation = Square root of Variance', isCorrect: true },
          { textKn: 'Standard Deviation = Variance + 10', textEn: 'Standard Deviation = Variance + 10', isCorrect: false },
          { textKn: 'ಯಾವುದೇ ಸಂಬಂಧವಿಲ್ಲ', textEn: 'No relationship', isCorrect: false }
        ],
        hintKn: '√10 ≈ 3.16 ಆಗಿರುವುದನ್ನು ಗಮನಿಸಿ.',
        hintEn: 'sqrt(10) equals approximately 3.16.',
        explanationKn: 'Standard Deviation ಎಂಬುದು Variance ನ ಧನಾತ್ಮಕ ವರ್ಗಮೂಲವಾಗಿರುತ್ತದೆ.',
        explanationEn: 'Standard deviation is the square root of the variance.'
      },
      {
        id: 'q2',
        questionKn: 'ದಶಮಾಂಶ ಸಂಖ್ಯೆಯನ್ನು 2 ಸ್ಥಾನಗಳಿಗೆ ಸೀಮಿತಗೊಳಿಸಲು ಯಾವ ಪೈಥಾನ್ ಫಂಕ್ಷನ್ ಬಳಸಲಾಗಿದೆ?',
        questionEn: 'Which Python built-in function rounded std to 2 decimal places?',
        options: [
          { textKn: 'round(std, 2)', textEn: 'round(std, 2)', isCorrect: true },
          { textKn: 'cut(std, 2)', textEn: 'cut(std, 2)', isCorrect: false },
          { textKn: 'shorten(std, 2)', textEn: 'shorten(std, 2)', isCorrect: false }
        ],
        hintKn: 'ಸುತ್ತುಗೊಳಿಸು ಎಂಬ ಅರ್ಥದ ಇಂಗ್ಲಿಷ್ ಪದ.',
        hintEn: 'Starts with "round".',
        explanationKn: '`round(ಸಂಖ್ಯೆ, ಸ್ಥಾನಗಳು)` ಅಪೇಕ್ಷಿತ ದಶಮಾಂಶ ಸ್ಥಾನಗಳಿಗೆ ಸಂಖ್ಯೆಯನ್ನು ಸರಿಪಡಿಸುತ್ತದೆ.',
        explanationEn: '`round(val, n)` rounds to n decimal places.'
      }
    ],
    practiceMode: {
      cloze: {
        instructionKn: 'ಸಂಖ್ಯಾಶಾಸ್ತ್ರ ಫಂಕ್ಷನ್‌ಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ:',
        instructionEn: 'Fill in the statistics function calls:',
        codeTemplate: `import statistics
data = [10, 12, 14, 16, 18]
mean = statistics.{{BLANK1}}(data)
variance = statistics.{{BLANK2}}(data)
std = statistics.{{BLANK3}}(data)`,
        blanks: [
          { id: 'BLANK1', answer: 'mean', options: ['mean', 'average', 'avg', 'median'] },
          { id: 'BLANK2', answer: 'variance', options: ['variance', 'var', 'spread', 'diff'] },
          { id: 'BLANK3', answer: 'stdev', options: ['stdev', 'std', 'deviation', 'sigma'] }
        ]
      },
      termMatches: [
        { term: 'statistics.mean()', meaningKn: 'ಸರಾಸರಿ ಲೆಕ್ಕಾಚಾರ', meaningEn: 'Compute mean' },
        { term: 'statistics.variance()', meaningKn: 'ವ್ಯತ್ಯಾಸ ಲೆಕ್ಕಾಚಾರ', meaningEn: 'Compute variance' },
        { term: 'statistics.stdev()', meaningKn: 'ಪ್ರಮಾಣಿತ ವಿಚಲನ', meaningEn: 'Compute standard deviation' }
      ]
    },
    testMode: {
      questions: [
        {
          id: 'v1',
          questionKn: 'ಮ್ಯಾನುಯಲ್ ಎಕ್ಸರ್‌ಸೈಜ್ 32 ರ ಪ್ರಕಾರ ಈ ಪ್ರೋಗ್ರಾಂನಿಂದ ಬರುವ Standard Deviation ಮೌಲ್ಯ ಎಷ್ಟು?',
          questionEn: 'What is the rounded Standard Deviation output in Ex. No: 32?',
          options: [
            { textKn: 'Standard Deviation = 3.16', textEn: 'Standard Deviation = 3.16', isCorrect: true },
            { textKn: 'Standard Deviation = 10.0', textEn: 'Standard Deviation = 10.0', isCorrect: false },
            { textKn: 'Standard Deviation = 14.0', textEn: 'Standard Deviation = 14.0', isCorrect: false }
          ],
          explanationKn: '√10 ಮೌಲ್ಯವನ್ನು 2 ದಶಮಾಂಶ ಸ್ಥಾನಗಳಿಗೆ ಸುತ್ತುಗೊಳಿಸಿದಾಗ 3.16 ಬರುತ್ತದೆ.',
          explanationEn: 'sqrt(10) rounded to 2 places equals 3.16.'
        }
      ]
    },
    teacherNotes: {
      observationKn: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ `statistics.stdev()` ಮತ್ತು `statistics.variance()` ಇವು Sample statistics (N-1 ನಿಂದ ಭಾಗಿಸುವುದು) ಬಳಸುತ್ತವೆ ಎಂದು ಸ್ಪಷ್ಟಪಡಿಸಬಹುದು.',
      observationEn: 'Notice that statistics.stdev calculates sample standard deviation with n-1 degrees of freedom.',
      labTipsKn: 'ಮ್ಯಾನುಯಲ್‌ನಲ್ಲಿರುವ ಡೇಟಾ [10, 12, 14, 16, 18] ನಿಖರವಾಗಿ 14 ಸರಾಸರಿ ಮತ್ತು 10 ವ್ಯತ್ಯಾಸವನ್ನು ನೀಡುವಂತೆ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.',
      labTipsEn: 'Matches the exact numbers given on page 34 of the manual.'
    }
  },

  // LEVEL 10
  {
    id: 10,
    exerciseNumber: 33,
    weekNumber: 11,
    weekTitle: {
      kn: 'ವಾರ 11: ಸಂಖ್ಯಾಶಾಸ್ತ್ರೀಯ ಪ್ರಕ್ರಿಯೆ ನಿಯಂತ್ರಣದ ಪರಿಚಯ (SPC)',
      en: 'Week 11: Introduction To Statistical Process Control (Spc)'
    },
    title: {
      kn: 'ಲೆವೆಲ್ 10 – ಫ್ಯಾಕ್ಟರಿ ಪ್ರೊಸೆಸ್ ಮಾನಿಟರ್ (Factory Process Monitor)',
      en: 'Level 10 – Factory Process Monitor'
    },
    subtitle: {
      kn: 'ಕಂಟ್ರೋಲ್ ಚಾರ್ಟ್‌ನಲ್ಲಿ ನಿಯಂತ್ರಣದಲ್ಲಿರುವ (In-control) ಮತ್ತು ಹೊರಗಿರುವ (Out-of-control) ಬಿಂದುಗಳ ಪತ್ತೆ',
      en: 'Generate X-bar and R Control Charts; Identify In-control / Out-of-control Points'
    },
    badgeName: {
      kn: 'SPC ಸ್ಪೆಷಲಿಸ್ಟ್ (SPC Specialist)',
      en: 'SPC Specialist'
    },
    badgeIcon: 'Activity',
    category: 'Quality Control',
    step1What: {
      description: {
        kn: 'ಈ ಹಂತದಲ್ಲಿ ನಾವು ಕಂಟ್ರೋಲ್ ಚಾರ್ಟ್ ಗ್ರಾಫ್ ರಚಿಸಿ, ಜೊತೆಗೆ ಮೇಲಿನ ನಿಯಂತ್ರಣ ಮಿತಿ (Upper Control Limit UCL = 16) ಮತ್ತು ಕೆಳಗಿನ ನಿಯಂತ್ರಣ ಮಿತಿ (Lower Control Limit LCL = 11) ಗಿಂತ ಹೊರಗಿರುವ ದೋಷಪೂರಿತ ಮಾದರಿಗಳನ್ನು ಪೈಥಾನ್ ಮೂಲಕ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಗುರುತಿಸುತ್ತೇವೆ.',
        en: 'We plot X-bar and R charts and inspect production points against Upper Control Limit (UCL = 16) and Lower Control Limit (LCL = 11). Points above 16 or below 11 are identified as "Out of Control", while points within limits are "In Control".'
      },
      keyPoints: [
        { kn: '`ucl = 16` ಮತ್ತು `lcl = 11`: ಸಹಿಷ್ಣುತಾ ಮಿತಿಗಳು (Control Limits).', en: 'Control boundaries: UCL = 16, LCL = 11.' },
        { kn: '`if value > ucl or value < lcl :`: ಮಿತಿ ಮೀರಿದ ಬಿಂದುಗಳ ಪತ್ತೆ.', en: 'Detects out-of-control conditions exceeding thresholds.' },
        { kn: 'ದತ್ತಾಂಶ [12, 13, 11, 15, 18, 10] ನಲ್ಲಿ 18 (UCL ಗಿಂತ ಹೆಚ್ಚು) ಮತ್ತು 10 (LCL ಗಿಂತ ಕಡಿಮೆ) ಇವೆರಡೂ ನಿಯಂತ್ರಣ ಮೀರಿವೆ!', en: 'In data points, 18 and 10 are flagged Out of Control.' }
      ]
    },
    step2Engineering: {
      title: {
        kn: 'ಆಟೋಮ್ಯಾಟಿಕ್ ಕ್ವಾಲಿಟಿ ಅಲಾರ್ಮ್ ಅನ್ವಯ',
        en: 'Automated Shopfloor Quality Alarm System'
      },
      analogy: {
        kn: 'ಕಾರು ಎಂಜಿನ್ ಪಿಸ್ಟನ್ ತಯಾರಿಸುವ ಯಂತ್ರವನ್ನು ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ. ಪಿಸ್ಟನ್ ವ್ಯಾಸವು 11 mm ಗಿಂತ ಕಡಿಮೆಯಾದರೆ ಸಿಲಿಂಡರ್‌ನಲ್ಲಿ ಲೂಸ್ ಆಗುತ್ತದೆ; 16 mm ಗಿಂತ ಹೆಚ್ಚಾದರೆ ಸಿಲಿಂಡರ್ ಒಳಗೆ ತೂರುವುದೇ ಇಲ್ಲ! 18 mm ಅಥವಾ 10 mm ಬಂದಾಗ ಕಂಪ್ಯೂಟರ್ ತಕ್ಷಣ "Out of Control" ಎಂದು ಕೆಂಪು ಎಚ್ಚರಿಕೆ ದೀಪ ಹಚ್ಚಿ ಯಂತ್ರವನ್ನು ನಿಲ್ಲಿಸುತ್ತದೆ!',
        en: 'Imagine machining diesel engine pistons. If a piston is under 11 mm, engine compression leaks. If over 16 mm, it seizes inside the cylinder! When an automated probe registers 18 mm or 10 mm, an industrial SPC alarm halts production immediately!'
      },
      industryUseCase: {
        kn: 'ಆಟೋಮೊಬೈಲ್ ಉತ್ಪಾದನಾ ಘಟಕಗಳಲ್ಲಿ ನೈಜ-ಸಮಯದ ಪ್ರಕ್ರಿಯೆ ನಿಯಂತ್ರಣ (Real-time SPC).',
        en: 'Statistical Process Control (SPC) & Real-time Rejection Alarms.'
      },
      icon: 'AlertTriangle'
    },
    step3Python: {
      title: {
        kn: 'ತಾರ್ಕಿಕ ಆಪರೇಟರ್ `or` ಬಳಕೆ',
        en: 'Logical OR Operator in Inspection'
      },
      summary: {
        kn: 'ಮೌಲ್ಯವು ಮೇಲಿನ ಮಿತಿಗಿಂತ ಹೆಚ್ಚಿದ್ದರೂ (`> ucl`) ಅಥವಾ ಕೆಳಗಿನ ಮಿತಿಗಿಂತ ಕಡಿಮೆಯಿದ್ದರೂ (`< lcl`), ಎರಡರಲ್ಲೊಂದು ನಿಜವಾದರೂ `Out of Control` ಬರುತ್ತದೆ.',
        en: 'Using logical "or" flags points falling either above upper limit OR below lower limit.'
      },
      rules: [
        { kn: '1. `ucl = 16`: ಗರಿಷ್ಠ ಅನುಮತಿಸುವ ಮಿತಿ (Upper Limit).', en: '1. Upper limit threshold = 16.' },
        { kn: '2. `lcl = 11`: ಕನಿಷ್ಠ ಅನುಮತಿಸುವ ಮಿತಿ (Lower Limit).', en: '2. Lower limit threshold = 11.' },
        { kn: '3. `value > ucl or value < lcl`: ಯಾವುದೇ ಒಂದು ಮಿತಿ ಮೀರಿದರೂ ಅಪಾಯ!', en: '3. Compound condition catches both extremes.' },
        { kn: '4. ಮಿತಿಗಳ ನಡುವೆ ಇರುವ ಮೌಲ್ಯಗಳಿಗೆ `In Control` ಮುದ್ರಿತವಾಗುತ್ತದೆ.', en: '4. Safe values print In Control.' }
      ],
      terms: [
        { term: 'UCL', meaningKn: 'ಮೇಲಿನ ನಿಯಂತ್ರಣ ಮಿತಿ (Upper Control Limit)', meaningEn: 'Upper threshold beyond which process is unstable' },
        { term: 'LCL', meaningKn: 'ಕೆಳಗಿನ ನಿಯಂತ್ರಣ ಮಿತಿ (Lower Control Limit)', meaningEn: 'Lower threshold boundary' },
        { term: 'In Control', meaningKn: 'ನಿಯಮಿತ ಮಿತಿಯೊಳಗಿನ ಗುಣಮಟ್ಟ', meaningEn: 'Stable acceptable manufacturing variance' },
        { term: 'Out of Control', meaningKn: 'ಮಿತಿ ಮೀರಿದ ದೋಷಪೂರಿತ ಉತ್ಪಾದನೆ', meaningEn: 'Abnormal defect / tool failure anomaly' }
      ]
    },
    step4Code: {
      originalCode: `import matplotlib.pyplot as plt
xbar = [11, 12, 13, 12, 11.5]
r = [2, 2, 2, 2, 2]
sample_no = [1, 2, 3, 4, 5]
plt.plot(sample_no, xbar, marker='o')
plt.title("X Bar Chart")
plt.xlabel("Sample Number")
plt.ylabel("Average")
plt.show()
plt.plot(sample_no, r, marker='o')
plt.title("R Chart")
plt.xlabel("Sample Number")
plt.ylabel("Range")
plt.show()
# Identify in-control and out-of-control points
data = [12, 13, 11, 15, 18, 10]
ucl = 16
lcl = 11
for value in data :
if value > ucl or value < lcl :
print(value, "- Out of Control")
else :
print(value, "- In Control")`
    },
    step5LineByLine: [
      { line: 1, code: 'import matplotlib.pyplot as plt', kn: 'Matplotlib ಪ್ಲಾಟಿಂಗ್ ಲೈಬ್ರರಿ ಆಮದು ಮಾಡಿಕೊಳ್ಳುತ್ತದೆ.', en: 'Imports matplotlib pyplot.' },
      { line: 2, code: 'xbar = [11, 12, 13, 12, 11.5]', kn: '5 ಮಾದರಿಗಳ X-bar ಮೌಲ್ಯಗಳ ಪಟ್ಟಿ.', en: 'List of X-bar sample averages.' },
      { line: 3, code: 'r = [2, 2, 2, 2, 2]', kn: '5 ಮಾದರಿಗಳ ರೇಂಜ್ (R) ಮೌಲ್ಯಗಳ ಪಟ್ಟಿ.', en: 'List of sample ranges.' },
      { line: 4, code: 'sample_no = [1, 2, 3, 4, 5]', kn: 'ಸ್ಯಾಂಪಲ್ ಸಂಖ್ಯೆಗಳು 1 ರಿಂದ 5.', en: 'Sample index numbers 1 through 5.' },
      { line: 5, code: 'plt.plot(sample_no, xbar, marker=\'o\')', kn: 'X-Bar ಚಾರ್ಟ್ ಬಿಡಿಸುತ್ತದೆ.', en: 'Plots X-bar chart.' },
      { line: 10, code: 'plt.plot(sample_no, r, marker=\'o\')', kn: 'R ಚಾರ್ಟ್ ಬಿಡಿಸುತ್ತದೆ.', en: 'Plots R chart.' },
      { line: 15, code: '# Identify in-control and out-of-control points', kn: 'ಕಾಮೆಂಟ್: ನಿಯಂತ್ರಣ ಮಿತಿ ಪರಿಶೀಲನೆ.', en: 'Comment: Inspection algorithm.' },
      { line: 16, code: 'data = [12, 13, 11, 15, 18, 10]', kn: 'ಪರಿಶೀಲನೆಗೆ ಒಳಪಡಿಸಿದ 6 ಅಳತೆಗಳು.', en: 'Dataset of 6 component measurements.' },
      { line: 17, code: 'ucl = 16 / lcl = 11', kn: 'ಮೇಲಿನ ಮಿತಿ 16 ಮತ್ತು ಕೆಳಗಿನ ಮಿತಿ 11.', en: 'Sets UCL = 16 and LCL = 11.' },
      { line: 19, code: 'for value in data :', kn: 'ಪ್ರತಿ ಅಳತೆಗೂ ಲೂಪ್ ಚಲಿಸುತ್ತದೆ.', en: 'Iterates through each measurement.' },
      { line: 20, code: 'if value > ucl or value < lcl :', kn: '16 ಕ್ಕಿಂತ ಹೆಚ್ಚಾಗಿದೆಯೇ ಅಥವಾ 11 ಕ್ಕಿಂತ ಕಡಿಮೆಯಾಗಿದೆಯೇ ಪರಿಶೀಲಿಸುತ್ತದೆ.', en: 'Checks if value > 16 or < 11.' },
      { line: 21, code: 'print(value, "- Out of Control")', kn: '"Out of Control" ಎಂದು ಎಚ್ಚರಿಕೆ ಮುದ್ರಿಸುತ್ತದೆ.', en: 'Prints Out of Control notice.' },
      { line: 22, code: 'else :', kn: 'ಮೌಲ್ಯವು ಮಿತಿಯೊಳಗಿದ್ದರೆ (11 ರಿಂದ 16 ರವರೆಗೆ)...', en: 'Otherwise if within bounds...' },
      { line: 23, code: 'print(value, "- In Control")', kn: '"In Control" ಎಂದು ಮುದ್ರಿಸುತ್ತದೆ.', en: 'Prints In Control status.' }
    ],
    step6Predict: {
      prompt: {
        kn: '`data = [12, 13, 11, 15, 18, 10]` ನಲ್ಲಿ UCL=16 ಮತ್ತು LCL=11. ಇವುಗಳಲ್ಲಿ ಯಾವ ಮೌಲ್ಯಗಳು "Out of Control" ಆಗುತ್ತವೆ?',
        en: 'With UCL = 16 and LCL = 11, which numbers in [12, 13, 11, 15, 18, 10] are flagged as "Out of Control"?'
      },
      options: [
        {
          textKn: '18 ಮತ್ತು 10 (18 > 16 ಮತ್ತು 10 < 11)',
          textEn: '18 and 10 (18 > 16 and 10 < 11)',
          isCorrect: true,
          explanationKn: 'ಸರಿ! 18 ಮೇಲಿನ ಮಿತಿ 16 ನ್ನು ಮೀರಿದೆ, 10 ಕೆಳಗಿನ ಮಿತಿ 11 ಕ್ಕಿಂತ ಕಡಿಮೆಯಾಗಿದೆ. ಗಮನಿಸಿ: 11 ಮಿತಿಯಲ್ಲೇ ಇರುವುದರಿಂದ In Control ಆಗಿರುತ್ತದೆ.',
          explanationEn: 'Correct! 18 > 16 (UCL breached) and 10 < 11 (LCL breached). Note that 11 itself is in control.'
        },
        {
          textKn: 'ಕೇವಲ 18 ಮಾತ್ರ',
          textEn: 'Only 18',
          isCorrect: false,
          explanationKn: 'ತಪ್ಪು, 10 ಎಂಬುದು LCL=11 ಕ್ಕಿಂತ ಕಡಿಮೆಯಿರುವುದರಿಂದ ಅದೂ ನಿಯಂತ್ರಣ ತಪ್ಪಿದೆ.',
          explanationEn: 'Incorrect, 10 is strictly less than LCL 11.'
        },
        {
          textKn: 'ಎಲ್ಲವೂ In Control',
          textEn: 'All values are In Control',
          isCorrect: false,
          explanationKn: 'ತಪ್ಪು, 18 ಮತ್ತು 10 ಮಿತಿ ಮೀರಿವೆ.',
          explanationEn: 'Incorrect.'
        }
      ]
    },
    step7Run: {
      expectedStdout: `12 - In Control
13 - In Control
11 - In Control
15 - In Control
18 - Out of Control
10 - Out of Control`,
      isSimulation: true,
      simulationType: 'spc'
    },
    step8Challenge: [
      {
        id: 'q1',
        questionKn: 'ಒಂದು ವೇಳೆ ಅಳತೆ ಮೌಲ್ಯವು 11 ಆಗಿದ್ದರೆ (`value = 11`), ಅದು In Control ಆಗುತ್ತದೆಯೇ ಅಥವಾ Out of Control ಆಗುತ್ತದೆಯೇ?',
        questionEn: 'If value = 11 and lcl = 11, does it evaluate to In Control or Out of Control?',
        options: [
          { textKn: 'In Control (ಏಕೆಂದರೆ 11 < 11 ಎಂಬುದು ಸುಳ್ಳು)', textEn: 'In Control (because 11 < 11 is False)', isCorrect: true },
          { textKn: 'Out of Control', textEn: 'Out of Control', isCorrect: false }
        ],
        hintKn: 'ಕೋಡ್‌ನಲ್ಲಿ `<` (ಕಡಿಮೆ) ಬಳಸಲಾಗಿದೆಯೇ ವಿನಃ `<=` ಅಲ್ಲ.',
        hintEn: 'The condition is strict inequality `<` not `<=`.',
        explanationKn: '11 < 11 ಸುಳ್ಳಾಗುವುದರಿಂದ ಅದು In Control ಆಗಿರುತ್ತದೆ (ಮ್ಯಾನುಯಲ್‌ನ ಔಟ್‌ಪುಟ್ ನೋಡಿ: 11 - In Control).',
        explanationEn: '11 < 11 is False, so it falls into else block (11 - In Control).'
      },
      {
        id: 'q2',
        questionKn: 'SPC ಯ ಪೂರ್ಣ ರೂಪ (Full Form) ಏನು?',
        questionEn: 'What does SPC stand for in production engineering?',
        options: [
          { textKn: 'Statistical Process Control', textEn: 'Statistical Process Control', isCorrect: true },
          { textKn: 'Standard Python Code', textEn: 'Standard Python Code', isCorrect: false },
          { textKn: 'Simple Production Calculation', textEn: 'Simple Production Calculation', isCorrect: false }
        ],
        hintKn: 'ವಾರ 11 ರ ಶೀರ್ಷಿಕೆ ನೋಡಿ.',
        hintEn: 'Look at the week title.',
        explanationKn: 'SPC ಎಂದರೆ Statistical Process Control (ಸಂಖ್ಯಾಶಾಸ್ತ್ರೀಯ ಪ್ರಕ್ರಿಯೆ ನಿಯಂತ್ರಣ).',
        explanationEn: 'SPC stands for Statistical Process Control.'
      }
    ],
    practiceMode: {
      cloze: {
        instructionKn: 'ನಿಯಂತ್ರಣ ಮಿತಿ ಷರತ್ತುಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ:',
        instructionEn: 'Complete the control limit conditional test:',
        codeTemplate: `ucl = 16
lcl = 11
for value in data :
    if value {{BLANK1}} ucl {{BLANK2}} value < lcl :
        print(value, "- Out of Control")
    else :
        print(value, "- {{BLANK3}}")`,
        blanks: [
          { id: 'BLANK1', answer: '>', options: ['>', '<', '==', '>='] },
          { id: 'BLANK2', answer: 'or', options: ['or', 'and', 'not', 'xor'] },
          { id: 'BLANK3', answer: 'In Control', options: ['In Control', 'OK', 'Good', 'Pass'] }
        ]
      },
      termMatches: [
        { term: 'UCL (Upper Control Limit)', meaningKn: 'ಮೇಲಿನ ಗರಿಷ್ಠ ಮಿತಿ (16)', meaningEn: 'Upper threshold (16)' },
        { term: 'LCL (Lower Control Limit)', meaningKn: 'ಕೆಳಗಿನ ಕನಿಷ್ಠ ಮಿತಿ (11)', meaningEn: 'Lower threshold (11)' },
        { term: 'value > ucl or value < lcl', meaningKn: 'ಮಿತಿ ಮೀರಿದ ದೋಷ ಪತ್ತೆ', meaningEn: 'Out-of-control condition' }
      ]
    },
    testMode: {
      questions: [
        {
          id: 'v1',
          questionKn: 'ಮ್ಯಾನುಯಲ್ ಎಕ್ಸರ್‌ಸೈಜ್ 33 ರಲ್ಲಿ ನೀಡಲಾದ ಡೇಟಾದಲ್ಲಿ ಒಟ್ಟು ಎಷ್ಟು ಬಿಂದುಗಳು "Out of Control" ಆಗಿವೆ?',
          questionEn: 'How many data points in Ex. No: 33 are printed as "Out of Control"?',
          options: [
            { textKn: '2 ಬಿಂದುಗಳು (18 ಮತ್ತು 10)', textEn: '2 points (18 and 10)', isCorrect: true },
            { textKn: '1 ಬಿಂದು (ಕೇವಲ 18)', textEn: '1 point (only 18)', isCorrect: false },
            { textKn: '4 ಬಿಂದುಗಳು', textEn: '4 points', isCorrect: false }
          ],
          explanationKn: '18 ಮತ್ತು 10 ಎರಡೂ ಮಿತಿ ಮೀರಿರುವುದರಿಂದ 2 ಬಿಂದುಗಳು Out of Control ಆಗುತ್ತವೆ.',
          explanationEn: '18 (above 16) and 10 (below 11) yield 2 out-of-control readings.'
        }
      ]
    },
    teacherNotes: {
      observationKn: 'ಈ ಎಕ್ಸರ್‌ಸೈಜ್‌ನಲ್ಲಿ ಮ್ಯಾನುಯಲ್ ಲೇಖಕರು ಹಿಂದಿನ ತಪ್ಪು ಸರಿಪಡಿಸಿ `sample_no = [1, 2, 3, 4, 5]` ಎಂದು ಸರಿಯಾಗಿ ಸ್ಪಷ್ಟ ಪಟ್ಟಿಯನ್ನು ನೀಡಿದ್ದಾರೆ. ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಈ ವ್ಯತ್ಯಾಸವನ್ನು ತೋರಿಸಿ ಮೆಚ್ಚುಗೆ ವ್ಯಕ್ತಪಡಿಸಬಹುದು.',
      observationEn: 'Notice that here sample_no is properly defined as [1, 2, 3, 4, 5], resolving the previous exercise indexing ambiguity.',
      labTipsKn: 'ಔಟ್‌ಪುಟ್‌ನಲ್ಲಿ 11 - In Control ಎಂಬುದನ್ನು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸ್ಪಷ್ಟವಾಗಿ ತೋರಿಸಿ (ಗಡಿ ಮೌಲ್ಯ ಸಮನಾಗಿದ್ದರೆ ಒಳಗೇ ಇರುತ್ತದೆ).',
      labTipsEn: 'Highlight that borderline value 11 is In Control due to strict `<` inequality.'
    }
  },

  // LEVEL 11
  {
    id: 11,
    exerciseNumber: 34,
    weekNumber: 12,
    weekTitle: {
      kn: 'ವಾರ 12: ಹೈಪೋಥಿಸಿಸ್ ಪರೀಕ್ಷೆ ಮತ್ತು ಒಟ್ಟು ಗುಣಮಟ್ಟ ನಿರ್ವಹಣೆ (TQM)',
      en: 'Week 12: Hypothesis Testing And Total Quality Management'
    },
    title: {
      kn: 'ಲೆವೆಲ್ 11 – ಮೂಲ ಕಾರಣ ಪತ್ತೆಹಚ್ಚಿ (Find the Root Cause: Fishbone)',
      en: 'Level 11 – Find the Root Cause (Fishbone Diagram)'
    },
    subtitle: {
      kn: 'ದೋಷಕ್ಕೆ ಕಾರಣವಾಗುವ 4M ಗಳು: Machine, Material, Manpower, Method',
      en: 'Plot a Fishbone (Cause and Effect) Diagram'
    },
    badgeName: {
      kn: 'ರೂಟ್ ಕಾಸ್ ಅನಲಿಸ್ಟ್ (Root Cause Analyst)',
      en: 'Root Cause Analyst'
    },
    badgeIcon: 'GitPullRequest',
    category: 'Quality Control',
    step1What: {
      description: {
        kn: 'ಈ ಹಂತದಲ್ಲಿ ನಾವು ಒಟ್ಟು ಗುಣಮಟ್ಟ ನಿರ್ವಹಣೆಯ (TQM) ಪ್ರಸಿದ್ಧ ಇಶಿಕಾವಾ (Ishikawa / Cause and Effect) ಅಥವಾ ಫಿಶ್‌ಬೋನ್ (Fishbone) ಡಯಾಗ್ರಾಮ್ ಅನ್ನು Matplotlib ಲೈನ್ ಮತ್ತು ಟೆಕ್ಸ್ಟ್ ಕಮಾಂಡ್‌ಗಳಿಂದ ಪರದೆಯ ಮೇಲೆ ಬಿಡಿಸುತ್ತೇವೆ. ಇದು ದೋಷಕ್ಕೆ (Defect) ಕಾರಣವಾಗುವ ನಾಲ್ಕು ಪ್ರಮುಖ ಮೂಲಗಳನ್ನು (4Ms: Machine, Material, Manpower, Method) ಮೀನಿನ ಮುಳ್ಳಿನ ಆಕಾರದಲ್ಲಿ ತೋರಿಸುತ್ತದೆ.',
        en: 'We plot a Fishbone (Cause and Effect / Ishikawa) diagram using Matplotlib lines and text annotations. It maps out the four primary manufacturing cause categories (4Ms: Machine, Material, Manpower, Method) contributing to a production Defect.'
      },
      keyPoints: [
        { kn: '`plt.plot((10,10), (5,1))`: ಮೀನಿನ ಕೇಂದ್ರ ಬೆನ್ನೆಲುಬನ್ನು (Central spine) ಎಳೆಯುತ್ತದೆ.', en: 'Draws the central horizontal backbone connecting to the head defect.' },
        { kn: '`plt.plot((12,4), (6,5))` ಮತ್ತು `plt.plot((12,4), (4,5))`: ಪಕ್ಕೆಲುಬುಗಳನ್ನು (Ribs) ಎಳೆಯುತ್ತದೆ.', en: 'Draws the diagonal cause branch ribs.' },
        { kn: '`plt.text(...)`: Machine, Material, Manpower, Method ಮತ್ತು Defect ಶೀರ್ಷಿಕೆಗಳನ್ನು ನಿಖರ ಜಾಗದಲ್ಲಿ ಬರೆಯುತ್ತದೆ.', en: 'Annotates categories and defect title.' },
        { kn: '`plt.axis(\'off\')`: ಗಣಿತದ ಅಕ್ಷಗಳನ್ನು ಮರೆಮಾಚಿ ಕೇವಲ ರೇಖಾಚಿತ್ರವನ್ನು ತೋರಿಸುತ್ತದೆ.', en: 'Hides coordinate axes for a clean diagram.' }
      ]
    },
    step2Engineering: {
      title: {
        kn: 'ಮೆಕ್ಯಾನಿಕಲ್ ಶಾಪ್‌ನಲ್ಲಿ ಫಿಶ್‌ಬೋನ್‌ನ ಅನ್ವಯ',
        en: 'Mechanical Workshop Root Cause Analysis (RCA)'
      },
      analogy: {
        kn: 'ಶಾಪ್‌ನಲ್ಲಿ ತಯಾರಾದ ಬೇರಿಂಗ್ ಕಪ್‌ನಲ್ಲಿ (Bearing Cup) ಬಿರುಕು (Crack / Defect) ಕಂಡುಬಂದಿದೆ ಎಂದು ಭಾವಿಸಿ. ಇಂಜಿನಿಯರ್‌ಗಳು ತಕ್ಷಣ ಯಾರನ್ನೂ ದೂಷಿಸುವುದಿಲ್ಲ! ಬದಲಾಗಿ ಫಿಶ್‌ಬೋನ್ ಚಾರ್ಟ್ ಹಾಕಿ ತನಿಖೆ ಮಾಡುತ್ತಾರೆ:\n1. Machine (ಮೆಷಿನ್ ವೈಬ್ರೇಷನ್ ಆಗಿದೆಯೇ?)\n2. Material (ಕಚ್ಚಾ ಉಕ್ಕಿನಲ್ಲಿ ದೋಷವಿದೆಯೇ?)\n3. Manpower (ಆಪರೇಟರ್ ಸರಿಯಾಗಿ ಕ್ಲಾಂಪ್ ಮಾಡಿಲ್ಲವೇ?)\n4. Method (ಕಟಿಂಗ್ ಸ್ಪೀಡ್ ತಪ್ಪಾಗಿತ್ತೇ?).',
        en: 'If a batch of cast gearbox housings fractures, manufacturing engineers conduct an 8D Root Cause Analysis using a Fishbone diagram. They methodically inspect: Machine (lathe runout), Material (alloy porosity), Manpower (operator training), and Method (coolant feed rate) to eradicate defects!'
      },
      industryUseCase: {
        kn: 'ಉತ್ಪಾದನಾ ದೋಷ ನಿವಾರಣೆ ಮತ್ತು ಸಿಕ್ಸ್ ಸಿಗ್ಮಾ ಇಶಿಕಾವಾ ವಿಶ್ಲೇಷಣೆ (Ishikawa RCA).',
        en: 'Total Quality Management (TQM), 8D Problem Solving & Failure Analysis.'
      },
      icon: 'GitCommit'
    },
    step3Python: {
      title: {
        kn: 'ಮ್ಯಾಟ್‌ಪ್ಲಾಟ್‌ಲಿಬ್ ಗ್ರಾಫಿಕಲ್ ಅನೋಟೇಷನ್',
        en: 'Matplotlib Custom Diagramming'
      },
      summary: {
        kn: 'ಸಂಖ್ಯಾತ್ಮಕ ಗ್ರಾಫ್ ಅಲ್ಲದೇ ಕಸ್ಟಮ್ ಇಂಜಿನಿಯರಿಂಗ್ ಡಯಾಗ್ರಾಮ್‌ಗಳನ್ನು ರೇಖೆಗಳು ಮತ್ತು ಅಕ್ಷರಗಳಿಂದ ಬಿಡಿಸುವ ವಿಧಾನ.',
        en: 'Using coordinate lines and text placement to build custom visual schematics.'
      },
      rules: [
        { kn: '1. `plt.figure(figsize=(8,4))`: ಚಿತ್ರದ ಅಗಲ 8 ಮತ್ತು ಎತ್ತರ 4 ಇಂಚು ನಿಗದಿಪಡಿಸುತ್ತದೆ.', en: '1. Defines figure aspect ratio.' },
        { kn: '2. `plt.plot((x1, x2), (y1, y2))`: ನಿರ್ದಿಷ್ಟ ಬಿಂದುಗಳ ನಡುವೆ ರೇಖೆ ಎಳೆಯುತ್ತದೆ.', en: '2. Draws lines between coordinate pairs.' },
        { kn: '3. `plt.text(x, y, "Text")`: ನಿರ್ದಿಷ್ಟ ಜಾಗದಲ್ಲಿ ಅಕ್ಷರಗಳನ್ನು ಮುದ್ರಿಸುತ್ತದೆ.', en: '3. Places text labels on the canvas.' },
        { kn: '4. `plt.axis(\'off\')`: ಚಾರ್ಟ್‌ನ ಸುತ್ತಲಿನ ನಂಬರ್ ಲೈನ್‌ಗಳನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ.', en: '4. Removes grid axes for a pure diagram look.' }
      ],
      terms: [
        { term: 'Fishbone Diagram', meaningKn: 'ಮೀನಿನ ಮುಳ್ಳಿನಂತಿರುವ ಕಾರಣ-ಪರಿಣಾಮ ನಕ್ಷೆ (Ishikawa)', meaningEn: 'Cause-and-effect diagram' },
        { term: '4M', meaningKn: 'Machine, Material, Manpower, Method', meaningEn: 'Four main pillars of manufacturing failure modes' },
        { term: 'plt.axis(\'off\')', meaningKn: 'ಅಕ್ಷರೇಖೆಗಳನ್ನು ಆಫ್ ಮಾಡುವುದು', meaningEn: 'Turns off axis spines and tick marks' }
      ]
    },
    step4Code: {
      originalCode: `import matplotlib.pyplot as plt
plt.figure(figsize=(8,4))
plt.plot((10,10), (5,1))
plt.plot((12,4), (6,5))
plt.plot((12,4), (4,5))
plt.text(10,10,"Defect")
plt.text(1.2,4,"Machine")
plt.text(7.2,6,"Material")
plt.text(7.2,4,"Method")
plt.text(1.2,6,"Manpower")
plt.axis('off')
plt.title("Fishbone Diagram")
plt.show()`
    },
    step5LineByLine: [
      { line: 1, code: 'import matplotlib.pyplot as plt', kn: 'Matplotlib ಲೈಬ್ರರಿ ಆಮದು ಮಾಡಿಕೊಳ್ಳುತ್ತದೆ.', en: 'Imports pyplot module.' },
      { line: 2, code: 'plt.figure(figsize=(8,4))', kn: '8x4 ಗಾತ್ರದ ಕ್ಯಾನ್ವಾಸ್ ರಚಿಸುತ್ತದೆ.', en: 'Creates figure canvas of size 8x4 inches.' },
      { line: 3, code: 'plt.plot((10,10), (5,1))', kn: 'ಮ್ಯಾನುಯಲ್ ಕೋಡ್: ಕೇಂದ್ರದ ಬೆನ್ನೆಲುಬು ರೇಖೆ ಎಳೆಯುತ್ತದೆ.', en: 'Draws central backbone line.' },
      { line: 4, code: 'plt.plot((12,4), (6,5))', kn: 'ಮೇಲಿನ ಪಕ್ಕೆಲುಬುಗಳ ರೇಖೆ ಎಳೆಯುತ್ತದೆ.', en: 'Draws upper diagonal rib lines.' },
      { line: 5, code: 'plt.plot((12,4), (4,5))', kn: 'ಕೆಳಗಿನ ಪಕ್ಕೆಲುಬುಗಳ ರೇಖೆ ಎಳೆಯುತ್ತದೆ.', en: 'Draws lower diagonal rib lines.' },
      { line: 6, code: 'plt.text(10,10,"Defect")', kn: 'ಮೀನಿನ ತಲೆಯ ಜಾಗದಲ್ಲಿ "Defect" ಎಂದು ಬರೆಯುತ್ತದೆ.', en: 'Labels the Defect at the head.' },
      { line: 7, code: 'plt.text(1.2,4,"Machine")', kn: '"Machine" ವರ್ಗದ ಹೆಸರು ಬರೆಯುತ್ತದೆ.', en: 'Labels Machine category.' },
      { line: 8, code: 'plt.text(7.2,6,"Material")', kn: '"Material" ವರ್ಗದ ಹೆಸರು ಬರೆಯುತ್ತದೆ.', en: 'Labels Material category.' },
      { line: 9, code: 'plt.text(7.2,4,"Method")', kn: '"Method" ವರ್ಗದ ಹೆಸರು ಬರೆಯುತ್ತದೆ.', en: 'Labels Method category.' },
      { line: 10, code: 'plt.text(1.2,6,"Manpower")', kn: '"Manpower" ವರ್ಗದ ಹೆಸರು ಬರೆಯುತ್ತದೆ.', en: 'Labels Manpower category.' },
      { line: 11, code: 'plt.axis(\'off\')', kn: 'ಗ್ರಾಫ್‌ನ ಚೌಕಟ್ಟು ಮತ್ತು ಅಕ್ಷಗಳನ್ನು ಮರೆಮಾಡುತ್ತದೆ.', en: 'Turns off axes.' },
      { line: 12, code: 'plt.title("Fishbone Diagram")', kn: '"Fishbone Diagram" ಎಂದು ಶೀರ್ಷಿಕೆ ನೀಡುತ್ತದೆ.', en: 'Sets title Fishbone Diagram.' },
      { line: 13, code: 'plt.show()', kn: 'ರೇಖಾಚಿತ್ರವನ್ನು ಸ್ಕ್ರೀನ್ ಮೇಲೆ ತೋರಿಸುತ್ತದೆ.', en: 'Renders the figure.' }
    ],
    step6Predict: {
      prompt: {
        kn: 'ಈ ರೇಖಾಚಿತ್ರದಲ್ಲಿ ಪರಿಣಾಮ (Effect/Head) ಏನೆಂದು ನಮೂದಿಸಲಾಗಿದೆ?',
        en: 'What is the central effect/head being analyzed in this Fishbone diagram?'
      },
      options: [
        {
          textKn: 'Defect (ದೋಷ)',
          textEn: 'Defect',
          isCorrect: true,
          explanationKn: 'ಸರಿ! `plt.text(10,10,"Defect")` ಮೂಲಕ ದೋಷವನ್ನು ಮುಖ್ಯ ಪರಿಣಾಮವಾಗಿ ಇಡಲಾಗಿದೆ.',
          explanationEn: 'Correct! "Defect" is the effect at coordinates (10,10).'
        },
        {
          textKn: 'Money (ಹಣ)',
          textEn: 'Money',
          isCorrect: false,
          explanationKn: 'ತಪ್ಪು, ಪ್ರೋಗ್ರಾಂನಲ್ಲಿ Defect ಎಂದು ಬರೆಯಲಾಗಿದೆ.',
          explanationEn: 'Incorrect.'
        },
        {
          textKn: 'Success',
          textEn: 'Success',
          isCorrect: false,
          explanationKn: 'ತಪ್ಪು.',
          explanationEn: 'Incorrect.'
        }
      ]
    },
    step7Run: {
      expectedStdout: `Fishbone Diagram plotted successfully.
Categories: Machine, Material, Method, Manpower -> Defect`,
      isSimulation: true,
      simulationType: 'fishbone'
    },
    step8Challenge: [
      {
        id: 'q1',
        questionKn: 'ಇಶಿಕಾವಾ ಫಿಶ್‌ಬೋನ್ ಡಯಾಗ್ರಾಮ್‌ನಲ್ಲಿ ಬರುವ 4M ಗಳು ಯಾವುವು?',
        questionEn: 'What are the classic 4M categories plotted in this program?',
        options: [
          { textKn: 'Machine, Material, Manpower, Method', textEn: 'Machine, Material, Manpower, Method', isCorrect: true },
          { textKn: 'Math, Memory, Monitor, Mouse', textEn: 'Math, Memory, Monitor, Mouse', isCorrect: false },
          { textKn: 'Motor, Metal, Mile, Metric', textEn: 'Motor, Metal, Mile, Metric', isCorrect: false }
        ],
        hintKn: 'ಕೋಡ್‌ನಲ್ಲಿರುವ 4 ಪಠ್ಯ ಲೇಬಲ್‌ಗಳನ್ನು ನೋಡಿ.',
        hintEn: 'Look at the four text annotations in lines 7 to 10.',
        explanationKn: 'ಉತ್ಪಾದನಾ ಗುಣಮಟ್ಟದ 4 ಪ್ರಮುಖ ಸ್ತಂಭಗಳೇ Machine, Material, Manpower, Method.',
        explanationEn: 'The traditional manufacturing failure branches are Machine, Material, Manpower, and Method.'
      },
      {
        id: 'q2',
        questionKn: 'ಗ್ರಾಫ್‌ನ ಚೌಕಟ್ಟು ಮತ್ತು ನಂಬರ್ ಅಕ್ಷಗಳನ್ನು ಮರೆಮಾಡಲು Matplotlib ನಲ್ಲಿ ಯಾವ ಕಮಾಂಡ್ ಬಳಸಲಾಗಿದೆ?',
        questionEn: 'Which command hid the coordinate axes to make it look like a clean diagram?',
        options: [
          { textKn: "plt.axis('off')", textEn: "plt.axis('off')", isCorrect: true },
          { textKn: "plt.hide()", textEn: "plt.hide()", isCorrect: false },
          { textKn: "plt.remove_axis()", textEn: "plt.remove_axis()", isCorrect: false }
        ],
        hintKn: '"axis" ಜೊತೆಗೆ "off" ಇರುವುದನ್ನು ಗಮನಿಸಿ.',
        hintEn: 'axis parameter set to string "off".',
        explanationKn: '`plt.axis(\'off\')` ಅಕ್ಷರೇಖೆಗಳನ್ನು ಮರೆಮಾಚುತ್ತದೆ.',
        explanationEn: '`plt.axis(\'off\')` turns off axis frame and ticks.'
      }
    ],
    practiceMode: {
      cloze: {
        instructionKn: 'ಫಿಶ್‌ಬೋನ್ ಡಯಾಗ್ರಾಮ್ ಕಮಾಂಡ್‌ಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ:',
        instructionEn: 'Fill in the fishbone plotting syntax:',
        codeTemplate: `import matplotlib.pyplot as plt
plt.figure(figsize=(8,4))
plt.{{BLANK1}}(10, 10, "Defect")
plt.text(1.2, 4, "{{BLANK2}}")
plt.axis({{BLANK3}})
plt.title("Fishbone Diagram")
plt.show()`,
        blanks: [
          { id: 'BLANK1', answer: 'text', options: ['text', 'label', 'annotate', 'write'] },
          { id: 'BLANK2', answer: 'Machine', options: ['Machine', 'Computer', 'Sensor', 'Robot'] },
          { id: 'BLANK3', answer: "'off'", options: ["'off'", "'on'", "'hide'", "False"] }
        ]
      },
      termMatches: [
        { term: 'Defect', meaningKn: 'ಉತ್ಪನ್ನದಲ್ಲಿರುವ ದೋಷ (ಮುಖ್ಯ ಪರಿಣಾಮ)', meaningEn: 'Defect / Primary Effect' },
        { term: 'Machine', meaningKn: 'ಯಂತ್ರದ ಕಾರಣಗಳು', meaningEn: 'Machine causes' },
        { term: 'Material', meaningKn: 'ಕಚ್ಚಾ ವಸ್ತುವಿನ ಕಾರಣಗಳು', meaningEn: 'Raw material causes' }
      ]
    },
    testMode: {
      questions: [
        {
          id: 'v1',
          questionKn: 'ಫಿಶ್‌ಬೋನ್ ಡಯಾಗ್ರಾಮ್ ಅನ್ನು ಇನ್ನೊಂದು ಯಾವ ಹೆಸರಿನಿಂದ ಕರೆಯುತ್ತಾರೆ?',
          questionEn: 'What is another well-known name for the Fishbone diagram in Quality Management?',
          options: [
            { textKn: 'ಇಶಿಕಾವಾ ಅಥವಾ ಕಾರಣ ಮತ್ತು ಪರಿಣಾಮ ನಕ್ಷೆ (Cause and Effect Diagram)', textEn: 'Ishikawa or Cause and Effect Diagram', isCorrect: true },
            { textKn: 'ಪೈ ಚಾರ್ಟ್ (Pie Chart)', textEn: 'Pie Chart', isCorrect: false },
            { textKn: 'ಬಾರ್ ಗ್ರಾಫ್ (Bar Graph)', textEn: 'Bar Graph', isCorrect: false }
          ],
          explanationKn: 'ಇದನ್ನು ಜಪಾನಿನ ಗುಣಮಟ್ಟ ತಜ್ಞ ಕಾವೊರು ಇಶಿಕಾವಾ ಅವರು ಅಭಿವೃದ್ಧಿಪಡಿಸಿದ ಕಾರಣ ಇಶಿಕಾವಾ ಡಯಾಗ್ರಾಮ್ ಎನ್ನುತ್ತಾರೆ.',
          explanationEn: 'Developed by Dr. Kaoru Ishikawa, also called Cause-and-Effect diagram.'
        }
      ]
    },
    teacherNotes: {
      observationKn: 'ಮ್ಯಾನುಯಲ್ ಪುಟ 36 ರಲ್ಲಿರುವ ಎಕ್ಸರ್‌ಸೈಜ್ 34 ರ ಕೋಆರ್ಡಿನೇಟ್‌ಗಳು ಸರಳ ರೇಖೆಗಳಾಗಿವೆ. ಶಿಕ್ಷಕರಿಗೆ ಇದನ್ನು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ವಿವರಿಸುವಾಗ ಗ್ರಾಫ್‌ನಲ್ಲಿ ಕೋಆರ್ಡಿನೇಟ್‌ಗಳ ಮೂಲಕ ರೇಖೆಗಳನ್ನು ಹೇಗೆ ಜೋಡಿಸಲಾಗಿದೆ ಎಂದು ತೋರಿಸಲು ಅನುಕೂಲಕರವಾಗಿದೆ.',
      observationEn: 'Coordinates in Ex 34 draw stylized straight segments forming a schematic spine and branches.',
      labTipsKn: 'ಮ್ಯಾನುಯಲ್‌ನ ಮೂಲ ಕೋಡ್‌ನಲ್ಲಿರುವ `plt.plot((10,10), (5,1))` ಮುಂತಾದ ಲೈನ್ ವಿವರಗಳನ್ನು ಹಾಗೆಯೇ ಉಳಿಸಿಕೊಳ್ಳಲಾಗಿದೆ.',
      labTipsEn: 'Matches page 36 verbatim.'
    }
  },

  // LEVEL 12
  {
    id: 12,
    exerciseNumber: 36,
    weekNumber: 13,
    weekTitle: {
      kn: 'ವಾರ 13: ಸೀಮಿತ ಧಾತು ವಿಧಾನ (Finite Element Method - FEM)',
      en: 'Week 13: Finite Element Method (Fem)'
    },
    title: {
      kn: 'ಲೆವೆಲ್ 12 – ಒತ್ತಡ ವಿಶ್ಲೇಷಣಾ ಲ್ಯಾಬ್ (Stress Analysis Lab)',
      en: 'Level 12 – Stress Analysis Lab'
    },
    subtitle: {
      kn: 'ಪಟ್ಟಿಯ ವಿವಿಧ ಉದ್ದಗಳಲ್ಲಿ ಒತ್ತಡ ಹಂಚಿಕೆ (Stress Distribution Along a Bar)',
      en: 'Plot Stress Distribution in a Plate at Various Lengths Along the Bar'
    },
    badgeName: {
      kn: 'FEA ಅನಲಿಸ್ಟ್ (FEA Analyst)',
      en: 'FEA Analyst'
    },
    badgeIcon: 'Zap',
    category: 'FEM & Analysis',
    step1What: {
      description: {
        kn: 'ಈ ಹಂತದಲ್ಲಿ ನಾವು ಮೆಕ್ಯಾನಿಕಲ್ ಬಾರ್ (Bar/Plate) ಒಂದರ ಉದ್ದಕ್ಕೂ (Length: 0 ರಿಂದ 5 ಮೀಟರ್) ಉಂಟಾಗುವ ಒತ್ತಡವನ್ನು (Stress: [10, 15, 20, 18, 14, 12] MPa) ಪೈಥಾನ್ Matplotlib ಬಳಸಿ ಗ್ರಾಫ್ ರೂಪದಲ್ಲಿ ರಚಿಸುತ್ತೇವೆ.',
        en: 'We plot the stress distribution along a structural bar of lengths [0, 1, 2, 3, 4, 5] with corresponding stress magnitudes [10, 15, 20, 18, 14, 12] using Matplotlib line plots with a background grid.'
      },
      keyPoints: [
        { kn: '`length = [0, 1, 2, 3, 4, 5]`: ಬಾರ್‌ನ ಉದ್ದದ ಬಿಂದುಗಳು (X-axis).', en: 'Length coordinates along the member.' },
        { kn: '`stress = [10, 15, 20, 18, 14, 12]`: ಪ್ರತಿ ಬಿಂದುವಿನಲ್ಲಿನ ಒತ್ತಡ (Y-axis).', en: 'Stress values measured at each length node.' },
        { kn: '`plt.grid(True)`: ಇಂಜಿನಿಯರಿಂಗ್ ಡ್ರಾಯಿಂಗ್‌ನಂತೆ ಗ್ರಿಡ್ ಗೆರೆಗಳನ್ನು ತೋರಿಸುತ್ತದೆ.', en: 'Enables grid lines for precision reading.' }
      ]
    },
    step2Engineering: {
      title: {
        kn: 'ಮೆಕ್ಯಾನಿಕಲ್ ಸ್ಟ್ರಕ್ಚರಲ್ ವಿಶ್ಲೇಷಣೆ ಅನ್ವಯ',
        en: 'Structural Mechanics & Finite Element Analysis'
      },
      analogy: {
        kn: 'ಸೇತುವೆಯ ಗರ್ಡರ್ (Bridge Girder) ಅಥವಾ ಕ್ರೇನ್‌ನ ಆರ್ಮ್ (Crane Boom) ಮೇಲೆ ಭಾರ (Load) ಬಿದ್ದಾಗ, ಎಲ್ಲಾ ಕಡೆಯೂ ಒಂದೇ ರೀತಿಯ ಒತ್ತಡ ಇರುವುದಿಲ್ಲ. ಕೆಲವು ಜಾಗದಲ್ಲಿ ಒತ್ತಡ ಗರಿಷ್ಠವಾಗಿರುತ್ತದೆ (ಇಲ್ಲಿ ಉದ್ದ = 2 ಆದಾಗ ಒತ್ತಡ = 20 MPa ಗರಿಷ್ಠ). ಈ ಗ್ರಾಫ್ ನೋಡಿ ಮೆಕ್ಯಾನಿಕಲ್ ಇಂಜಿನಿಯರ್‌ಗಳು ಆ ಭಾಗ ಮುರಿದು ಬೀಳದಂತೆ ದಪ್ಪವನ್ನು ಹೆಚ್ಚಿಸುತ್ತಾರೆ!',
        en: 'When a mechanical shaft or crane arm is under axial and bending tension, stress varies along its span. Here, maximum stress peaks at Length = 2 with 20 MPa. Structural engineers use this curve to reinforce critical cross-sections to prevent catastrophic yielding!'
      },
      industryUseCase: {
        kn: 'ಏರೋಸ್ಪೇಸ್ ಮತ್ತು ಆಟೋಮೊಬೈಲ್ ಚಾಸಿಸ್ ಬಲ ವಿಶ್ಲೇಷಣೆ (Ansys / FEA Stress Verification).',
        en: 'Aerospace Wing Spars, Machine Tool Columns & FEA Stress Validation.'
      },
      icon: 'Layers'
    },
    step3Python: {
      title: {
        kn: 'ಇಂಜಿನಿಯರಿಂಗ್ ಗ್ರಿಡ್ ಲೈನ್ಸ್ ಮತ್ತು ಲೇಬಲ್‌ಗಳು',
        en: 'Engineering Chart Labeling'
      },
      summary: {
        kn: 'ಎರಡು ಪಟ್ಟಿಗಳ (X ಮತ್ತು Y) ಮೌಲ್ಯಗಳನ್ನು ಜೋಡಿಸಿ, ಅಕ್ಷಗಳಿಗೆ ಸರಿಯಾದ ಇಂಜಿನಿಯರಿಂಗ್ ಹೆಸರುಗಳನ್ನು ನೀಡುವುದು.',
        en: 'Pairing two lists (Length and Stress) and configuring technical axis labels.'
      },
      rules: [
        { kn: '1. `plt.xlabel("Length of Bar")`: X-ಅಕ್ಷಕ್ಕೆ ಬಾರ್‌ನ ಉದ್ದ ಎಂದು ಹೆಸರಿಡುತ್ತದೆ.', en: '1. Labels horizontal axis with physical quantity.' },
        { kn: '2. `plt.ylabel("Stress")`: Y-ಅಕ್ಷಕ್ಕೆ ಒತ್ತಡ ಎಂದು ಹೆಸರಿಡುತ್ತದೆ.', en: '2. Labels vertical axis with Stress.' },
        { kn: '3. `plt.grid(True)`: ರೀಡಿಂಗ್ ಓದಲು ಗ್ರಿಡ್ ನೆಟ್‌ವರ್ಕ್ ನೀಡುತ್ತದೆ.', en: '3. Turns on coordinate grid mesh.' },
        { kn: '4. `marker=\'o\'`: ಪ್ರತಿ ಬಿಂದುವಿನಲ್ಲೂ ವೃತ್ತಾಕಾರದ ಗುರುತು ಇರಿಸುತ್ತದೆ.', en: '4. Highlights each discrete test point.' }
      ],
      terms: [
        { term: 'Stress (ಒತ್ತಡ)', meaningKn: 'ವಸ್ತುವಿನ ಪ್ರತಿ ಯೂನಿಟ್ ವಿಸ್ತೀರ್ಣದ ಮೇಲೆ ಬೀಳುವ ಆಂತರಿಕ ಬಲ (Force/Area)', meaningEn: 'Internal resisting force per unit area (N/m² or MPa)' },
        { term: 'plt.grid(True)', meaningKn: 'ಗ್ರಾಫ್‌ನಲ್ಲಿ ಗ್ರಿಡ್ ಗೆರೆಗಳನ್ನು ತೋರಿಸು', meaningEn: 'Displays coordinate grid lines' },
        { term: 'Peak Stress', meaningKn: 'ಗರಿಷ್ಠ ಒತ್ತಡ ಬಿಂದು (ಇಲ್ಲಿ 20 MPa)', meaningEn: 'Maximum stress concentration location' }
      ]
    },
    step4Code: {
      originalCode: `import matplotlib.pyplot as plt
length = [0, 1, 2, 3, 4, 5]
stress = [10, 15, 20, 18, 14, 12]
plt.plot(length, stress, marker='o')
plt.title("Stress Distribution Along a Bar")
plt.xlabel("Length of Bar")
plt.ylabel("Stress")
plt.grid(True)
plt.show()`
    },
    step5LineByLine: [
      { line: 1, code: 'import matplotlib.pyplot as plt', kn: 'Matplotlib ಲೈಬ್ರರಿ ಆಮದು ಮಾಡಿಕೊಳ್ಳುತ್ತದೆ.', en: 'Imports matplotlib pyplot.' },
      { line: 2, code: 'length = [0, 1, 2, 3, 4, 5]', kn: 'ಬಾರ್‌ನ ಉದ್ದದ 6 ಬಿಂದುಗಳು (0 ರಿಂದ 5).', en: 'Length node positions 0 to 5.' },
      { line: 3, code: 'stress = [10, 15, 20, 18, 14, 12]', kn: 'ಆ ಬಿಂದುಗಳಲ್ಲಿ ದಾಖಲಾದ ಒತ್ತಡದ ಮೌಲ್ಯಗಳು.', en: 'Corresponding stress values.' },
      { line: 4, code: 'plt.plot(length, stress, marker=\'o\')', kn: 'ಉದ್ದ ಮತ್ತು ಒತ್ತಡದ ನಡುವೆ ಗ್ರಾಫ್ ರೇಖೆ ಎಳೆಯುತ್ತದೆ.', en: 'Plots stress vs length curve with circular markers.' },
      { line: 5, code: 'plt.title("Stress Distribution Along a Bar")', kn: 'ಗ್ರಾಫ್‌ಗೆ ಶೀರ್ಷಿಕೆ ನೀಡುತ್ತದೆ.', en: 'Sets title Stress Distribution Along a Bar.' },
      { line: 6, code: 'plt.xlabel("Length of Bar")', kn: 'X-ಅಕ್ಷಕ್ಕೆ "Length of Bar" ಎಂದು ಹೆಸರಿಸುತ್ತದೆ.', en: 'Labels X axis.' },
      { line: 7, code: 'plt.ylabel("Stress")', kn: 'Y-ಅಕ್ಷಕ್ಕೆ "Stress" ಎಂದು ಹೆಸರಿಸುತ್ತದೆ.', en: 'Labels Y axis.' },
      { line: 8, code: 'plt.grid(True)', kn: 'ಗ್ರಿಡ್ ಗೆರೆಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ.', en: 'Enables grid lines.' },
      { line: 9, code: 'plt.show()', kn: 'ಗ್ರಾಫ್ ಅನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ.', en: 'Renders the plot.' }
    ],
    step6Predict: {
      prompt: {
        kn: 'ಈ ದತ್ತಾಂಶದಲ್ಲಿ ಬಾರ್‌ನ ಯಾವ ಉದ್ದದಲ್ಲಿ ಗರಿಷ್ಠ ಒತ್ತಡ (Maximum Stress) ಉಂಟಾಗುತ್ತದೆ?',
        en: 'At what length coordinate does the bar experience the peak maximum stress?'
      },
      options: [
        {
          textKn: 'Length = 2 (Stress = 20)',
          textEn: 'Length = 2 (Stress = 20)',
          isCorrect: true,
          explanationKn: 'ಸರಿ! ಉದ್ದ 2 ಆದಾಗ ಒತ್ತಡ ಗರಿಷ್ಠ 20 ತಲುಪುತ್ತದೆ.',
          explanationEn: 'Correct! At index 2 (length = 2), stress reaches its maximum of 20.'
        },
        {
          textKn: 'Length = 0 (Stress = 10)',
          textEn: 'Length = 0 (Stress = 10)',
          isCorrect: false,
          explanationKn: 'ಉದ್ದ 0 ಇದ್ದಾಗ ಒತ್ತಡ ಕೇವಲ 10 ಆಗಿದೆ.',
          explanationEn: 'Incorrect, 10 is the starting stress.'
        },
        {
          textKn: 'Length = 5 (Stress = 12)',
          textEn: 'Length = 5 (Stress = 12)',
          isCorrect: false,
          explanationKn: 'ತಪ್ಪು, ಉದ್ದ 5 ಇದ್ದಾಗ ಒತ್ತಡ 12 ಕ್ಕೆ ಇಳಿದಿದೆ.',
          explanationEn: 'Incorrect.'
        }
      ]
    },
    step7Run: {
      expectedStdout: `Plot generated: Stress Distribution Along a Bar
Max Stress = 20 at Length = 2`,
      isSimulation: true,
      simulationType: 'stress_bar'
    },
    step8Challenge: [
      {
        id: 'q1',
        questionKn: 'ಗ್ರಾಫ್‌ನಲ್ಲಿ ಗ್ರಿಡ್ ಗೆರೆಗಳನ್ನು ಆನ್ ಮಾಡಲು ಯಾವ ಫಂಕ್ಷನ್ ಕರೆಯಲಾಗಿದೆ?',
        questionEn: 'Which command turned on the engineering grid overlay in Ex. No: 36?',
        options: [
          { textKn: 'plt.grid(True)', textEn: 'plt.grid(True)', isCorrect: true },
          { textKn: 'plt.lines(True)', textEn: 'plt.lines(True)', isCorrect: false },
          { textKn: 'plt.mesh(True)', textEn: 'plt.mesh(True)', isCorrect: false }
        ],
        hintKn: '"grid" ಎಂಬ ಪದವಿದೆ.',
        hintEn: 'Exact function name is grid(True).',
        explanationKn: '`plt.grid(True)` ಹಿನ್ನೆಲೆ ಗ್ರಿಡ್ ಗೆರೆಗಳನ್ನು ಆನ್ ಮಾಡುತ್ತದೆ.',
        explanationEn: '`plt.grid(True)` enables background grid lines.'
      },
      {
        id: 'q2',
        questionKn: 'ಮೆಕ್ಯಾನಿಕಲ್ ಇಂಜಿನಿಯರಿಂಗ್‌ನಲ್ಲಿ Stress (ಒತ್ತಡ) ನ SI ಯೂನಿಟ್ ಯಾವುದು?',
        questionEn: 'What is the SI unit of Stress in mechanical engineering?',
        options: [
          { textKn: 'N/m² ಅಥವಾ Pascal (Pa / MPa)', textEn: 'N/m² or Pascal (Pa / MPa)', isCorrect: true },
          { textKn: 'Kilogram (kg)', textEn: 'Kilogram (kg)', isCorrect: false },
          { textKn: 'Meter per second (m/s)', textEn: 'Meter per second (m/s)', isCorrect: false }
        ],
        hintKn: 'ಬಲ ÷ ವಿಸ್ತೀರ್ಣ (Force per unit Area).',
        hintEn: 'Force (Newtons) divided by Area (square meters).',
        explanationKn: 'ಒತ್ತಡದ SI ಏಕಮಾನ ಪ್ಯಾಸ್ಕಲ್ (N/m²).',
        explanationEn: 'Stress is measured in Pascals (N/m²).'
      }
    ],
    practiceMode: {
      cloze: {
        instructionKn: 'ಒತ್ತಡ ವಿತರಣಾ ಕೋಡ್ ಸಾಲುಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ:',
        instructionEn: 'Complete the stress plot script:',
        codeTemplate: `length = [0, 1, 2, 3, 4, 5]
stress = [10, 15, 20, 18, 14, 12]
plt.plot(length, stress, marker={{BLANK1}})
plt.title("Stress Distribution Along a Bar")
plt.xlabel("{{BLANK2}}")
plt.ylabel("Stress")
plt.{{BLANK3}}(True)`,
        blanks: [
          { id: 'BLANK1', answer: "'o'", options: ["'o'", "'+'", "'-'", "None"] },
          { id: 'BLANK2', answer: 'Length of Bar', options: ['Length of Bar', 'Time', 'Speed', 'Distance'] },
          { id: 'BLANK3', answer: 'grid', options: ['grid', 'show', 'axis', 'box'] }
        ]
      },
      termMatches: [
        { term: 'Length', meaningKn: 'ಬಾರ್‌ನ ಉದ್ದ', meaningEn: 'Member length' },
        { term: 'Stress', meaningKn: 'ಆಂತರಿಕ ಒತ್ತಡ', meaningEn: 'Mechanical stress' },
        { term: 'plt.grid(True)', meaningKn: 'ಗ್ರಿಡ್ ಗೆರೆಗಳು', meaningEn: 'Grid overlay' }
      ]
    },
    testMode: {
      questions: [
        {
          id: 'v1',
          questionKn: 'ಮ್ಯಾನುಯಲ್ ಎಕ್ಸರ್‌ಸೈಜ್ 36 ರ ಪ್ರಕಾರ ಬಾರ್‌ನ ಕೊನೆಯ ಬಿಂದುವಿನಲ್ಲಿ (Length = 5) ಒತ್ತಡ ಎಷ್ಟು?',
          questionEn: 'According to Ex. No: 36, what is the stress at the final length station (Length = 5)?',
          options: [
            { textKn: '12', textEn: '12', isCorrect: true },
            { textKn: '20', textEn: '20', isCorrect: false },
            { textKn: '10', textEn: '10', isCorrect: false }
          ],
          explanationKn: '`stress = [10, 15, 20, 18, 14, 12]` ಪಟ್ಟಿಯಲ್ಲಿ ಕೊನೆಯ ಸಂಖ್ಯೆ 12.',
          explanationEn: 'The last entry in stress list is 12.'
        }
      ]
    },
    teacherNotes: {
      observationKn: 'ವಾರ 13 ರ ಎಕ್ಸರ್‌ಸೈಜ್ 36 ಫೈನೈಟ್ ಎಲಿಮೆಂಟ್ ಮೆಥಡ್ (FEM) ಅಧ್ಯಾಯದಲ್ಲಿದೆ. ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ 1D ಬಾರ್ ಎಲಿಮೆಂಟ್‌ನಲ್ಲಿ ನೋಡ್‌ಗಳ ಒತ್ತಡವನ್ನು ಗ್ರಾಫ್‌ನಲ್ಲಿ ನೋಡುವುದನ್ನು ಸುಲಭವಾಗಿ ವಿವರಿಸಬಹುದು.',
      observationEn: 'Connects 1D bar element nodal stress results to standard FEA post-processing visualizers.',
      labTipsKn: 'ಮ್ಯಾನುಯಲ್ ಪುಟ 38 ರ ಕೋಡ್ ಅನ್ನು ಯಾವುದೇ ಬದಲಾವಣೆ ಇಲ್ಲದೆ ನಿಖರವಾಗಿ ಪಾಲಿಸಲಾಗಿದೆ.',
      labTipsEn: 'Matches page 38 exactly.'
    }
  },

  // LEVEL 13
  {
    id: 13,
    exerciseNumber: 37,
    weekNumber: 13,
    weekTitle: {
      kn: 'ವಾರ 13: ಸೀಮಿತ ಧಾತು ವಿಧಾನ (Finite Element Method - FEM)',
      en: 'Week 13: Finite Element Method (Fem)'
    },
    title: {
      kn: 'ಲೆವೆಲ್ 13 – ಅಂತಿಮ ಬಾಸ್: ರಂಧ್ರವಿರುವ ಪ್ಲೇಟ್ (Final Boss: Plate With a Hole)',
      en: 'Level 13 – Final Boss: Plate With a Hole'
    },
    subtitle: {
      kn: 'ರಂಧ್ರವಿರುವ ಮತ್ತು ರಂಧ್ರವಿಲ್ಲದ ಪ್ಲೇಟ್‌ಗಳ ಒತ್ತಡ ವಿತರಣೆ ಹೋಲಿಕೆ (Stress Concentration)',
      en: 'Compare and Plot Stress Distribution in a Plate With and Without Hole'
    },
    badgeName: {
      kn: 'ಮೆಕ್ಯಾನಿಕಲ್ ಕೋಡಿಂಗ್ ಚಾಂಪಿಯನ್ (Mechanical Coding Champion)',
      en: 'Mechanical Coding Champion'
    },
    badgeIcon: 'Trophy',
    category: 'FEM & Analysis',
    step1What: {
      description: {
        kn: 'ಇದು ನಿಮ್ಮ ಅಂತಿಮ ಎಂಜಿನಿಯರಿಂಗ್ ಮಿಷನ್! ಒಂದೇ ಗ್ರಾಫ್‌ನಲ್ಲಿ ಎರಡು ವಿಭಿನ್ನ ರೇಖೆಗಳನ್ನು ಬಿಡಿಸಿ ಹೋಲಿಕೆ ಮಾಡುತ್ತೇವೆ: 1. ರಂಧ್ರವಿರುವ ಪ್ಲೇಟ್ (`stress_with_hole = [10, 18, 25, 22, 16, 12]`), 2. ರಂಧ್ರವಿಲ್ಲದ ಸಾಮಾನ್ಯ ಪ್ಲೇಟ್ (`stress_without_hole = [10, 12, 14, 13, 12, 11]`). ರಂಧ್ರದ ಅಂಚಿನಲ್ಲಿ ಒತ್ತಡವು 14 ರಿಂದ ನೇರವಾಗಿ 25 ಕ್ಕೆ ಹೇಗೆ ಜಿಗಿಯುತ್ತದೆ (Stress Concentration) ಎಂಬುದನ್ನು ಈ ಗ್ರಾಫ್ ಸಾಬೀತುಪಡಿಸುತ್ತದೆ!',
        en: 'The Final Boss Mission! We compare two curves on a single chart: Plate with hole vs Plate without hole. It proves the famous mechanical engineering phenomenon of "Stress Concentration", where a geometric hole causes a dangerous stress spike up to 25 MPa!'
      },
      keyPoints: [
        { kn: '`plt.plot(..., label="With Hole")`: ಮೊದಲ ರೇಖೆಗೆ "With Hole" ಎಂದು ಹೆಸರು.', en: 'Plots first curve with label.' },
        { kn: '`plt.plot(..., label="Without Hole")`: ಎರಡನೇ ರೇಖೆಗೆ "Without Hole" ಎಂದು ಹೆಸರು.', en: 'Plots second comparison curve.' },
        { kn: '`plt.legend()`: ಗ್ರಾಫ್‌ನಲ್ಲಿ ಯಾವ ಬಣ್ಣದ ರೇಖೆ ಯಾವುದಕ್ಕೆ ಸಂಬಂಧಿಸಿದ್ದು ಎಂದು ವಿವರಿಸುವ ಲೆಜೆಂಡ್ ಬಾಕ್ಸ್ ತೋರಿಸುತ್ತದೆ.', en: 'Generates legend box matching labels.' }
      ]
    },
    step2Engineering: {
      title: {
        kn: 'ಮೆಕ್ಯಾನಿಕಲ್ ಡಿಸೈನ್‌ನಲ್ಲಿ ಒತ್ತಡ ಸಾಂದ್ರತೆಯ (Stress Concentration) ಮಹತ್ವ',
        en: 'Stress Concentration Factor (Kt) in Machine Design'
      },
      analogy: {
        kn: 'ವಿಮಾನದ ಕಿಟಕಿಗಳು ಅಥವಾ ಹಡಗಿನ ಬಾಗಿಲುಗಳಲ್ಲಿ ಚೂಪಾದ ಮೂಲೆಗಳ ಬದಲು ದುಂಡಗಿನ ಮೂಲೆಗಳನ್ನು (Round Fillets) ಏಕೆ ಮಾಡುತ್ತಾರೆ ಗೊತ್ತೇ? ಏಕೆಂದರೆ ಲೋಹದ ತಟ್ಟೆಯಲ್ಲಿ ರಂಧ್ರ ಅಥವಾ ಕಟ್ ಇದ್ದಾಗ, ಆ ರಂಧ್ರದ ಅಂಚಿನಲ್ಲಿ ಬಲದ ರೇಖೆಗಳು ಒತ್ತಾಗಿ ಸೇರಿ ಒತ್ತಡವು ಬಹುಪಟ್ಟು ಹೆಚ್ಚಾಗುತ್ತದೆ (Stress Concentration)! ಈ ಗ್ರಾಫ್‌ನಲ್ಲಿ ರಂಧ್ರವಿಲ್ಲದಿದ್ದಾಗ ಗರಿಷ್ಠ ಒತ್ತಡ ಕೇವಲ 14 MPa ಇದ್ದುದು, ರಂಧ್ರ ಕೊರೆದ ತಕ್ಷಣ 25 MPa ಗೆ ಏರಿದೆ!',
        en: 'Why are airplane windows and submarine hatches rounded instead of square? A discontinuity like a circular hole distorts tensile stress trajectories, multiplying localized stress by a theoretical stress concentration factor Kt ≈ 2.5 to 3.0! The plate without hole peaks at only 14 MPa, whereas the plate with hole experiences a violent spike to 25 MPa!'
      },
      industryUseCase: {
        kn: 'ಬೋಲ್ಟ್ ಹೋಲ್‌ಗಳು (Bolt Holes), ಕೀ-ವೇಗಳು (Keyways) ಮತ್ತು ಶಾಫ್ಟ್ ಫಿಲ್ಲೆಟ್ ವಿನ್ಯಾಸ.',
        en: 'Pressure Vessels, Riveted Joints, Turbine Discs & Aerospace Fuselage Panels.'
      },
      icon: 'ShieldAlert'
    },
    step3Python: {
      title: {
        kn: 'ಮಲ್ಟಿಪಲ್ ಕರ್ವ್ಸ್ ಮತ್ತು ಲೆಜೆಂಡ್ (Legend)',
        en: 'Multi-line Comparison & Legend in Matplotlib'
      },
      summary: {
        kn: 'ಒಂದೇ ಪ್ಲಾಟ್‌ನಲ್ಲಿ ಎರಡು ರೇಖೆಗಳನ್ನು ಎಳೆದು, `label` ಮತ್ತು `plt.legend()` ಬಳಸಿ ಹೋಲಿಸುವುದು.',
        en: 'Plotting multiple datasets on the same axes and distinguishing them via legend.'
      },
      rules: [
        { kn: '1. `plt.plot(length, stress_with_hole, ..., label="With Hole")`: ಮೊದಲ ಕರ್ವ್.', en: '1. Plots with-hole dataset with label.' },
        { kn: '2. `plt.plot(length, stress_without_hole, ..., label="Without Hole")`: ಎರಡನೇ ಕರ್ವ್.', en: '2. Plots without-hole comparison dataset.' },
        { kn: '3. `plt.legend()`: ಎರಡೂ ರೇಖೆಗಳ ಲೇಬಲ್ ಬಾಕ್ಸ್ ಅನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ.', en: '3. Renders the comparison legend box.' },
        { kn: '4. `plt.title("Stress Distribution Comparison")`: ಹೋಲಿಕೆಯ ಶೀರ್ಷಿಕೆ.', en: '4. Sets overarching comparative title.' }
      ],
      terms: [
        { term: 'Stress Concentration', meaningKn: 'ರಂಧ್ರ ಅಥವಾ ಮೂಲೆಯ ಬಳಿ ಒತ್ತಡ ತೀವ್ರಗೊಳ್ಳುವುದು', meaningEn: 'Localized stress magnification at geometric discontinuities' },
        { term: 'plt.legend()', meaningKn: 'ರೇಖೆಗಳ ವಿವರಣಾ ಬಾಕ್ಸ್ (ಸೂಚಿ)', meaningEn: 'Legend box key explaining line identifiers' },
        { term: 'Finite Element Method', meaningKn: 'ಸಂಕೀರ್ಣ ಯಂತ್ರ ಭಾಗಗಳ ಬಲ ಪರೀಕ್ಷಿಸುವ ಗಣಿತ ವಿಧಾನ', meaningEn: 'Numerical technique for structural simulation' }
      ]
    },
    step4Code: {
      originalCode: `import matplotlib.pyplot as plt
length = [0, 1, 2, 3, 4, 5]
stress_without_hole = [10, 12, 14, 13, 12, 11]
stress_with_hole = [10, 18, 25, 22, 16, 12]
plt.plot(length, stress_with_hole, marker='o', label="With Hole")
plt.plot(length, stress_without_hole, marker='o', label="Without Hole")
plt.title("Stress Distribution Comparison")
plt.xlabel("Length of Plate")
plt.ylabel("Stress")
plt.grid(True)
plt.legend()
plt.show()`
    },
    step5LineByLine: [
      { line: 1, code: 'import matplotlib.pyplot as plt', kn: 'Matplotlib ಲೈಬ್ರರಿ ಆಮದು ಮಾಡಿಕೊಳ್ಳುತ್ತದೆ.', en: 'Imports matplotlib pyplot.' },
      { line: 2, code: 'length = [0, 1, 2, 3, 4, 5]', kn: 'ಪ್ಲೇಟ್‌ನ ಉದ್ದದ ಬಿಂದುಗಳು (0 ರಿಂದ 5).', en: 'Plate length stations 0 to 5.' },
      { line: 3, code: 'stress_without_hole = [10, 12, 14, 13, 12, 11]', kn: 'ರಂಧ್ರವಿಲ್ಲದ ಸಾಮಾನ್ಯ ಪ್ಲೇಟ್‌ನಲ್ಲಿನ ಒತ್ತಡಗಳು.', en: 'Stress values for plate without hole.' },
      { line: 4, code: 'stress_with_hole = [10, 18, 25, 22, 16, 12]', kn: 'ರಂಧ್ರವಿರುವ ಪ್ಲೇಟ್‌ನಲ್ಲಿನ ಒತ್ತಡಗಳು (ಗರಿಷ್ಠ 25).', en: 'Stress values with hole (peaks at 25).' },
      { line: 5, code: 'plt.plot(..., label="With Hole")', kn: 'ರಂಧ್ರವಿರುವ ಪ್ಲೇಟ್‌ನ ರೇಖೆ ಎಳೆಯುತ್ತದೆ.', en: 'Plots with-hole curve with label.' },
      { line: 6, code: 'plt.plot(..., label="Without Hole")', kn: 'ರಂಧ್ರವಿಲ್ಲದ ಪ್ಲೇಟ್‌ನ ರೇಖೆ ಎಳೆಯುತ್ತದೆ.', en: 'Plots without-hole curve with label.' },
      { line: 7, code: 'plt.title("Stress Distribution Comparison")', kn: '"Stress Distribution Comparison" ಶೀರ್ಷಿಕೆ ನೀಡುತ್ತದೆ.', en: 'Sets title Stress Distribution Comparison.' },
      { line: 8, code: 'plt.xlabel("Length of Plate")', kn: 'X-ಅಕ್ಷಕ್ಕೆ "Length of Plate" ಎಂದು ಹೆಸರಿಸುತ್ತದೆ.', en: 'Labels X axis.' },
      { line: 9, code: 'plt.ylabel("Stress")', kn: 'Y-ಅಕ್ಷಕ್ಕೆ "Stress" ಎಂದು ಹೆಸರಿಸುತ್ತದೆ.', en: 'Labels Y axis.' },
      { line: 10, code: 'plt.grid(True)', kn: 'ಗ್ರಿಡ್ ಆನ್ ಮಾಡುತ್ತದೆ.', en: 'Enables grid lines.' },
      { line: 11, code: 'plt.legend()', kn: 'ಯಾವ ರೇಖೆ ಯಾವುದು ಎಂದು ತಿಳಿಸುವ ಲೆಜೆಂಡ್ ಸೂಚಿ ಪೆಟ್ಟಿಗೆ ತೋರಿಸುತ್ತದೆ.', en: 'Renders the legend box.' },
      { line: 12, code: 'plt.show()', kn: 'ಅಂತಿಮ ಗ್ರಾಫ್ ಪ್ರದರ್ಶಿಸುತ್ತದೆ.', en: 'Renders the comparative plot.' }
    ],
    step6Predict: {
      prompt: {
        kn: 'ಉದ್ದ = 2 ಆದಾಗ, ರಂಧ್ರವಿರುವ ಪ್ಲೇಟ್ (With Hole) ಮತ್ತು ರಂಧ್ರವಿಲ್ಲದ ಪ್ಲೇಟ್ (Without Hole) ಒತ್ತಡಗಳ ಮೌಲ್ಯ ಎಷ್ಟು?',
        en: 'At length station 2, what are the stress values for With Hole and Without Hole respectively?'
      },
      options: [
        {
          textKn: 'With Hole = 25 ಮತ್ತು Without Hole = 14',
          textEn: 'With Hole = 25 and Without Hole = 14',
          isCorrect: true,
          explanationKn: 'ಸರಿ! ರಂಧ್ರದ ಕಾರಣದಿಂದ ಒತ್ತಡ 14 ರಿಂದ 25 ಕ್ಕೆ ತೀವ್ರವಾಗಿ ಹೆಚ್ಚಾಗಿದೆ.',
          explanationEn: 'Correct! At index 2, stress_with_hole is 25 while stress_without_hole is 14.'
        },
        {
          textKn: 'With Hole = 10 ಮತ್ತು Without Hole = 10',
          textEn: 'With Hole = 10 and Without Hole = 10',
          isCorrect: false,
          explanationKn: 'ಇದು ಆರಂಭಿಕ ಬಿಂದುವಿನ (Length = 0) ಒತ್ತಡವಾಗಿದೆ.',
          explanationEn: 'That is at length 0.'
        },
        {
          textKn: 'With Hole = 14 ಮತ್ತು Without Hole = 25',
          textEn: 'With Hole = 14 and Without Hole = 25',
          isCorrect: false,
          explanationKn: 'ತಪ್ಪು, ರಂಧ್ರವಿದ್ದಾಗ ಒತ್ತಡ ಹೆಚ್ಚು ಇರುತ್ತದೆ, ಕಡಿಮೆ ಅಲ್ಲ!',
          explanationEn: 'Incorrect, the hole causes higher, not lower stress.'
        }
      ]
    },
    step7Run: {
      expectedStdout: `Plot generated: Stress Distribution Comparison
With Hole Peak Stress: 25 MPa
Without Hole Peak Stress: 14 MPa
Stress Concentration Observed at Length = 2`,
      isSimulation: true,
      simulationType: 'stress_hole'
    },
    step8Challenge: [
      {
        id: 'q1',
        questionKn: 'ಗ್ರಾಫ್‌ನಲ್ಲಿ ವಿವಿಧ ಬಣ್ಣದ ರೇಖೆಗಳನ್ನು ಗುರುತಿಸಲು (Label identification) ಯಾವ Matplotlib ಕಮಾಂಡ್ ಬಳಸಲಾಗುತ್ತದೆ?',
        questionEn: 'Which command displays the identification legend box linking line styles to their labels?',
        options: [
          { textKn: 'plt.legend()', textEn: 'plt.legend()', isCorrect: true },
          { textKn: 'plt.keys()', textEn: 'plt.keys()', isCorrect: false },
          { textKn: 'plt.show_labels()', textEn: 'plt.show_labels()', isCorrect: false }
        ],
        hintKn: 'ಮ್ಯಾನುಯಲ್ ಕೋಡ್‌ನ ಲೈನ್ 11 ನೋಡಿ.',
        hintEn: 'Look at line 11 of the code.',
        explanationKn: '`plt.legend()` ಲೇಬಲ್‌ಗಳ ಪೆಟ್ಟಿಗೆಯನ್ನು ಗ್ರಾಫ್‌ನಲ್ಲಿ ತೋರಿಸುತ್ತದೆ.',
        explanationEn: '`plt.legend()` generates the legend on the axes.'
      },
      {
        id: 'q2',
        questionKn: 'ರಂಧ್ರವಿರುವ ಪ್ಲೇಟ್‌ನಲ್ಲಿ ಗರಿಷ್ಠ ಒತ್ತಡವು ರಂಧ್ರವಿಲ್ಲದ ಪ್ಲೇಟ್‌ಗಿಂತ ಹೆಚ್ಚಾಗಲು ಕಾರಣವೇನು?',
        questionEn: 'Why does the plate with a hole experience a dramatic stress spike compared to the solid plate?',
        options: [
          { textKn: 'ಒತ್ತಡ ಸಾಂದ್ರತೆ (Stress Concentration)', textEn: 'Stress Concentration at geometric discontinuity', isCorrect: true },
          { textKn: 'ಕೇವಲ ಬಣ್ಣ ಬದಲಾವಣೆಯ ಕಾರಣ', textEn: 'Color variation', isCorrect: false },
          { textKn: 'ಗಣಕಯಂತ್ರದ ತಪ್ಪು ಲೆಕ್ಕಾಚಾರ', textEn: 'Computer rounding bug', isCorrect: false }
        ],
        hintKn: 'ರಂಧ್ರದ ಅಂಚಿನಲ್ಲಿ ಬಲದ ರೇಖೆಗಳು ಒತ್ತಾಗುತ್ತವೆ.',
        hintEn: 'Lines of force crowd around geometric cutouts.',
        explanationKn: 'ರೇಖಾಗಣಿತದ ಅಡಚಣೆಯಿಂದಾಗಿ (Hole) ರಂಧ್ರದ ಅಂಚಿನಲ್ಲಿ ಒತ್ತಡ ಸಾಂದ್ರೀಕರಣಗೊಳ್ಳುತ್ತದೆ.',
        explanationEn: 'Geometric discontinuity concentrates internal force flowlines.'
      }
    ],
    practiceMode: {
      cloze: {
        instructionKn: 'ಹೋಲಿಕಾ ಗ್ರಾಫ್‌ನ ಕೋಡ್ ಪೂರ್ಣಗೊಳಿಸಿ:',
        instructionEn: 'Complete the comparison stress plot script:',
        codeTemplate: `plt.plot(length, stress_with_hole, marker='o', label="{{BLANK1}}")
plt.plot(length, stress_without_hole, marker='o', label="{{BLANK2}}")
plt.title("Stress Distribution Comparison")
plt.grid(True)
plt.{{BLANK3}}()
plt.show()`,
        blanks: [
          { id: 'BLANK1', answer: 'With Hole', options: ['With Hole', 'Max Stress', 'Curve A', 'Plate 1'] },
          { id: 'BLANK2', answer: 'Without Hole', options: ['Without Hole', 'Min Stress', 'Curve B', 'Plate 2'] },
          { id: 'BLANK3', answer: 'legend', options: ['legend', 'label', 'annotate', 'info'] }
        ]
      },
      termMatches: [
        { term: 'With Hole', meaningKn: 'ರಂಧ್ರವಿರುವ ಪ್ಲೇಟ್ (Peak: 25)', meaningEn: 'Plate with hole (Peak: 25)' },
        { term: 'Without Hole', meaningKn: 'ರಂಧ್ರವಿಲ್ಲದ ಪ್ಲೇಟ್ (Peak: 14)', meaningEn: 'Solid plate (Peak: 14)' },
        { term: 'plt.legend()', meaningKn: 'ಸೂಚಿ ಪೆಟ್ಟಿಗೆ', meaningEn: 'Legend box' }
      ]
    },
    testMode: {
      questions: [
        {
          id: 'v1',
          questionKn: 'ಮ್ಯಾನುಯಲ್ ಎಕ್ಸರ್‌ಸೈಜ್ 37 ರ ಪ್ರಕಾರ ರಂಧ್ರವಿರುವ ಪ್ಲೇಟ್‌ನ ಗರಿಷ್ಠ ಒತ್ತಡ (Peak Stress) ಎಷ್ಟು?',
          questionEn: 'According to Ex. No: 37, what is the absolute peak stress value in the plate with a hole?',
          options: [
            { textKn: '25', textEn: '25', isCorrect: true },
            { textKn: '14', textEn: '14', isCorrect: false },
            { textKn: '20', textEn: '20', isCorrect: false }
          ],
          explanationKn: '`stress_with_hole` ಪಟ್ಟಿಯಲ್ಲಿ ಗರಿಷ್ಠ ಮೌಲ್ಯ 25 ಆಗಿದೆ.',
          explanationEn: 'Peak value in stress_with_hole list is 25 at length = 2.'
        }
      ]
    },
    teacherNotes: {
      observationKn: 'ಅಭಿನಂದನೆಗಳು! ಇದು ಸಂಪೂರ್ಣ 13 ಪ್ರೋಗ್ರಾಂಗಳ ಅಂತಿಮ ಹಂತವಾಗಿದೆ. ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಈ ಹಂತ ಮುಗಿದ ತಕ್ಷಣ "Mechanical Coding Champion" ಬ್ಯಾಡ್ಜ್ ಮತ್ತು ಡಿಪ್ಲೋಮಾ ಲ್ಯಾಬ್ ಪ್ರಮಾಣಪತ್ರ (Certificate) ಲಭ್ಯವಾಗುತ್ತದೆ.',
      observationEn: 'Final Boss level of the 13 manual exercises. Completing this unlocks the Mechanical Coding Champion badge and the formal Laboratory Record Certificate.',
      labTipsKn: 'ಮ್ಯಾನುಯಲ್ ಪುಟ 39 ಮತ್ತು 40 ರ ಎಕ್ಸರ್‌ಸೈಜ್ 37 ರ ಮೂಲ ಕೋಡ್ ಮತ್ತು ದತ್ತಾಂಶವನ್ನು ಯಥಾವತ್ತಾಗಿ ಅಳವಡಿಸಲಾಗಿದೆ.',
      labTipsEn: 'Matches Ex. 37 on page 39 verbatim.'
    }
  }
];

export const TECHNICAL_DICTIONARY: { [key: string]: { kn: string; en: string; descriptionKn: string; descriptionEn: string } } = {
  'Variable': {
    kn: 'ಚರಾಂಶ (ವೇರಿಯಬಲ್)',
    en: 'Variable',
    descriptionKn: 'ಬೆಲೆಗಳನ್ನು ಅಥವಾ ಡೇಟಾವನ್ನು ತಾತ್ಕಾಲಿಕವಾಗಿ ಶೇಖರಿಸಿಡುವ ಕಂಟೈನರ್.',
    descriptionEn: 'Named container used to store data in computer memory.'
  },
  'Function': {
    kn: 'ಕಾರ್ಯ (ಫಂಕ್ಷನ್)',
    en: 'Function',
    descriptionKn: 'ನಿರ್ದಿಷ್ಟ ಕೆಲಸವನ್ನು ಮಾಡುವ ಮತ್ತು ಮತ್ತೆ ಮತ್ತೆ ಕರೆಯಬಹುದಾದ ಕೋಡ್ ತುಣುಕು.',
    descriptionEn: 'Reusable block of code that performs a specific task.'
  },
  'Class': {
    kn: 'ವರ್ಗ (ಕ್ಲಾಸ್)',
    en: 'Class',
    descriptionKn: 'ವಸ್ತುಗಳನ್ನು (Objects) ಸೃಷ್ಟಿಸಲು ಬಳಸುವ ಇಂಜಿನಿಯರಿಂಗ್ ನೀಲನಕ್ಷೆ (Blueprint).',
    descriptionEn: 'Blueprint or mold from which individual objects are created.'
  },
  'Object': {
    kn: 'ವಸ್ತು (ಆಬ್ಜೆಕ್ಟ್)',
    en: 'Object',
    descriptionKn: 'ಕ್ಲಾಸ್‌ನ ಆಧಾರದ ಮೇಲೆ ತಯಾರಾದ ನೈಜ ಘಟಕ (ಉದಾ: ರಸ್ತೆಯಲ್ಲಿ ಓಡುವ ಕಾರು).',
    descriptionEn: 'Physical or virtual instance created from a class.'
  },
  'Loop': {
    kn: 'ಪುನರಾವರ್ತನೆ (ಲೂಪ್)',
    en: 'Loop',
    descriptionKn: 'ಒಂದು ಕೆಲಸವನ್ನು ಹಲವು ಬಾರಿ ಪದೇ ಪದೇ ಮಾಡಲು ಬಳಸುವ ಚಕ್ರ (for, while).',
    descriptionEn: 'Control structure that repeats code as long as a condition is met.'
  },
  'Inheritance': {
    kn: 'ಆನುವಂಶಿಕತೆ (ಇನ್‌ಹೆರಿಟೆನ್ಸ್)',
    en: 'Inheritance',
    descriptionKn: 'ಪೋಷಕ ವರ್ಗದಿಂದ ಗುಣಲಕ್ಷಣಗಳನ್ನು ಮಗು ವರ್ಗವು ಪಡೆದುಕೊಳ್ಳುವ ಸಾಮರ್ಥ್ಯ.',
    descriptionEn: 'Mechanism where a new class adopts properties of an existing class.'
  },
  'File Handling': {
    kn: 'ಕಡತ ನಿರ್ವಹಣೆ',
    en: 'File Handling',
    descriptionKn: 'ಕಂಪ್ಯೂಟರ್‌ನಲ್ಲಿರುವ ಕಡತಗಳನ್ನು (ಉದಾ: CSV, TXT) ತೆರೆಯುವುದು, ಓದುವುದು ಮತ್ತು ಬರೆಯುವುದು.',
    descriptionEn: 'Methods for reading from and writing to external disk files.'
  },
  'Exception Handling': {
    kn: 'ದೋಷ ನಿರ್ವಹಣೆ',
    en: 'Exception Handling',
    descriptionKn: 'ತಪ್ಪುಗಳು (ಉದಾ: ಶೂನ್ಯದಿಂದ ಭಾಗಿಸುವುದು) ಬಂದಾಗ ಪ್ರೋಗ್ರಾಂ ಕ್ರ್ಯಾಶ್ ಆಗದಂತೆ ತಡೆಯುವುದು.',
    descriptionEn: 'Managing runtime anomalies (try-except) to avoid program crashing.'
  },
  'Mean': {
    kn: 'ಸರಾಸರಿ (ಮೀನ್)',
    en: 'Mean',
    descriptionKn: 'ಎಲ್ಲಾ ಅಳತೆಗಳ ಒಟ್ಟು ಮೊತ್ತವನ್ನು ಒಟ್ಟು ಸಂಖ್ಯೆಯಿಂದ ಭಾಗಿಸಿದಾಗ ಬರುವ ಅಂಕಗಣಿತದ ಸರಾಸರಿ.',
    descriptionEn: 'Sum of all observations divided by total count of observations.'
  },
  'Variance': {
    kn: 'ವ್ಯತ್ಯಾಸ (ವೇರಿಯನ್ಸ್)',
    en: 'Variance',
    descriptionKn: 'ಅಳತೆಗಳು ಸರಾಸರಿ ಮೌಲ್ಯದಿಂದ ಎಷ್ಟು ಹರಡಿಕೊಂಡಿವೆ ಎಂದು ಅಳೆಯುವ ಮಾಪನ.',
    descriptionEn: 'Average of squared deviations from the arithmetic mean.'
  },
  'Standard Deviation': {
    kn: 'ಪ್ರಮಾಣಿತ ವಿಚಲನ (ಸ್ಟ್ಯಾಂಡರ್ಡ್ ಡಿವಿಯೇಷನ್)',
    en: 'Standard Deviation',
    descriptionKn: 'ಉತ್ಪಾದನಾ ಗುಣಮಟ್ಟದ ಸ್ಥಿರತೆ ಮತ್ತು ನಿಖರತೆ ಅಳೆಯುವ ಮಾಪನ (Variance ನ ವರ್ಗಮೂಲ).',
    descriptionEn: 'Square root of variance measuring dispersion in production parts.'
  },
  'Stress': {
    kn: 'ಒತ್ತಡ (ಸ್ಟ್ರೆಸ್)',
    en: 'Stress',
    descriptionKn: 'ಯಾಂತ್ರಿಕ ಬಾರ್ ಅಥವಾ ಪ್ಲೇಟ್‌ನ ಪ್ರತಿ ಯೂನಿಟ್ ವಿಸ್ತೀರ್ಣದ ಮೇಲೆ ಬೀಳುವ ಆಂತರಿಕ ತಡೆ ಬಲ.',
    descriptionEn: 'Internal resisting force per unit area within a loaded solid.'
  },
  'GPIO': {
    kn: 'ಸಾಮಾನ್ಯ ಇನ್‌ಪುಟ್/ಔಟ್‌ಪುಟ್ ಪಿನ್‌ಗಳು',
    en: 'General Purpose Input/Output',
    descriptionKn: 'ರಾಸ್ಪ್ಬೆರಿ ಪೈ ಬೋರ್ಡ್‌ನಲ್ಲಿ ಮೋಟಾರ್ ಮತ್ತು ಸೆನ್ಸಾರ್‌ಗಳನ್ನು ನಿಯಂತ್ರಿಸಲು ಇರುವ ಪಿನ್‌ಗಳು.',
    descriptionEn: 'Programmable electronic pins on microcomputers like Raspberry Pi.'
  }
};

export const BADGES_LIST = [
  { id: 'b1', nameKn: 'ಪೈಥಾನ್ ಬಿಗಿನರ್ (Python Beginner)', nameEn: 'Python Beginner', icon: 'Sparkles', descKn: 'ಮೊದಲ CSV ಮಿಷನ್ ಪೂರ್ಣಗೊಳಿಸಿದ್ದಕ್ಕಾಗಿ', descEn: 'Completed Level 01' },
  { id: 'b2', nameKn: 'ಕೋಡ್ ಎಕ್ಸ್‌ಪ್ಲೋರರ್ (Code Explorer)', nameEn: 'Code Explorer', icon: 'Compass', descKn: '3 ಮಿಷನ್‌ಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ್ದಕ್ಕಾಗಿ', descEn: 'Completed 3 Levels' },
  { id: 'b3', nameKn: 'ಕ್ಲಾಸ್ ಕ್ರಿಯೇಟರ್ (Class Creator)', nameEn: 'Class Creator', icon: 'Layers', descKn: 'ಆಬ್ಜೆಕ್ಟ್-ಓರಿಯೆಂಟೆಡ್ ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಕರಗತ ಮಾಡಿಕೊಂಡಿದ್ದಕ್ಕಾಗಿ', descEn: 'Mastered OOP concepts' },
  { id: 'b4', nameKn: 'ಆಟೋಮೇಷನ್ ಇಂಜಿನಿಯರ್ (Automation Engineer)', nameEn: 'Automation Engineer', icon: 'Factory', descKn: 'ಸ್ಮಾರ್ಟ್ ಫ್ಯಾಕ್ಟರಿ ಕಂಟ್ರೋಲರ್ ನಿರ್ಮಿಸಿದ್ದಕ್ಕಾಗಿ', descEn: 'Built factory automation logic' },
  { id: 'b5', nameKn: 'ರೋಬೋಟ್ ಕಮಾಂಡರ್ (Robot Commander)', nameEn: 'Robot Commander', icon: 'Bot', descKn: 'ರಾಸ್ಪ್ಬೆರಿ ಪೈ ಮೋಟಾರ್ ನಿಯಂತ್ರಿಸಿದ್ದಕ್ಕಾಗಿ', descEn: 'Controlled robot drive motors' },
  { id: 'b6', nameKn: 'ಕ್ವಾಲಿಟಿ ಇನ್ಸ್‌ಪೆಕ್ಟರ್ (Quality Inspector)', nameEn: 'Quality Inspector', icon: 'CheckCircle2', descKn: 'SQC ಚಾರ್ಟ್‌ಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ವಿಶ್ಲೇಷಿಸಿದ್ದಕ್ಕಾಗಿ', descEn: 'Analyzed SQC charts' },
  { id: 'b7', nameKn: 'ಗ್ರಾಫ್ ಮಾಸ್ಟರ್ (Graph Master)', nameEn: 'Graph Master', icon: 'LineChart', descKn: 'ಮ್ಯಾಟ್‌ಪ್ಲಾಟ್‌ಲಿಬ್ ಗ್ರಾಫ್‌ಗಳನ್ನು ನಿಖರವಾಗಿ ರಚಿಸಿದ್ದಕ್ಕಾಗಿ', descEn: 'Plotted advanced Matplotlib graphs' },
  { id: 'b8', nameKn: 'ಮೆಕ್ಯಾನಿಕಲ್ ಕೋಡಿಂಗ್ ಚಾಂಪಿಯನ್ (Mechanical Coding Champion)', nameEn: 'Mechanical Coding Champion', icon: 'Trophy', descKn: 'ಎಲ್ಲಾ 13 ಲ್ಯಾಬ್ ಎಕ್ಸರ್‌ಸೈಜ್‌ಗಳನ್ನು ಜಯಿಸಿದ್ದಕ್ಕಾಗಿ!', descEn: 'Mastered all 13 laboratory exercises!' }
];

export const INITIAL_STUDENTS_MOCK = [
  { id: 's1', name: 'Ravi Kumar H M', usn: '416ME23001', completedCount: 13, totalXp: 1300, testAverage: 98, lastActive: '2026-10-31', status: 'Ahead' as const },
  { id: 's2', name: 'Kiran Gowda', usn: '416ME23002', completedCount: 8, totalXp: 750, testAverage: 86, lastActive: '2026-10-30', status: 'On Track' as const, difficultLevel: 8 },
  { id: 's3', name: 'Asha K S', usn: '416ME23003', completedCount: 11, totalXp: 1050, testAverage: 92, lastActive: '2026-10-31', status: 'Ahead' as const },
  { id: 's4', name: 'Manu B R', usn: '416ME23004', completedCount: 5, totalXp: 450, testAverage: 72, lastActive: '2026-10-28', status: 'Needs Help' as const, difficultLevel: 5 },
  { id: 's5', name: 'Darshan G', usn: '416ME23005', completedCount: 9, totalXp: 880, testAverage: 88, lastActive: '2026-10-29', status: 'On Track' as const },
  { id: 's6', name: 'Pooja Patil', usn: '416ME23006', completedCount: 12, totalXp: 1180, testAverage: 95, lastActive: '2026-10-31', status: 'Ahead' as const },
  { id: 's7', name: 'Sanjay Kumar M', usn: '416ME23007', completedCount: 4, totalXp: 380, testAverage: 68, lastActive: '2026-10-27', status: 'Needs Help' as const, difficultLevel: 4 }
];
