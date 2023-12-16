 interface EmpType {
    id: number
    name: string
    email: string
    status: string
    action: string
 }
 
 export const EmpData: EmpType[] = [
    {
        id: 1,
        name: 'Tirth',
        email: 'td.codelink@gmail.com',
        status: 'Active',
        action: 'Manage Permissions'
    },
    {
        id: 2,
        name: 'Narendra',
        email: 'nd.codelink@gmail.com',
        status: 'Active',
        action: 'Manage Permissions'
    },
    {
        id: 3,
        name: 'Hiren',
        email: 'td.codelink@gmail.com',
        status: 'Active',
        action: 'Manage Permissions'
    },
    {
        id: 4,
        name: 'Pankaj',
        email: 'pp.codelink@gmail.com',
        status: 'Active',
        action: 'Manage Permissions'
    },
    {
        id: 5,
        name: 'Kirtan',
        email: 'kt.codelink@gmail.com',
        status: 'Active',
        action: 'Manage Permissions'
    },
    {
        id: 6,
        name: 'Nikunj',
        email: 'nn.codelink@gmail.com',
        status: 'Active',
        action: 'Manage Permissions'
    },
    {
        id: 7,
        name: 'Jugal',
        email: 'jf.codelink@gmail.com',
        status: 'Active',
        action: 'Manage Permissions'
    },
    {
        id: 8,
        name: 'Darshan',
        email: 'dr.codelink@gmail.com',
        status: 'Active',
        action: 'Manage Permissions'
    },
    {
        id: 9,
        name: 'Yaya',
        email: 'yk.codelink@gmail.com',
        status: 'Active',
        action: 'Manage Permissions'
    },
    {
        id: 10,
        name: 'Suffiyan',
        email: 'ss.codelink@gmail.com',
        status: 'Active',
        action: 'Manage Permissions'
    },
]

export const module = ['Dashboard', 'Earnings', 'Employees', 'Products', 'Permissions', 'Payrolls', 'Projects']

export const typePermissions = [ 'Create', 'Read', 'Update', 'Delete']