import {
  awssaa,
  awsdev,
  awssysops,
  awsccp,
  securityplus,
  comingsoon,
  javascript,
  html,
  github,
  css,
  tailwind,
  git,
  uhmanoa,
  apexsystems,
  bows,
  cedge,
  pythonimage,
  awslogo,
  sqllogo,
  rdbmslogo,
  project1image,
  project2image,
  project2image1,
  project2image2,
  project2image3,
  project2image4,
  project2image6,
  project2image7,
  project2image9,
  project2image10,
  project2image15,
  project2image16,
  project3image,
  project4image,
  project5image,
  pyautoimage,
  sharepointlogo,
  powerplatformlogo,
  pyautovideo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Certifications",
    home_link: "/#about",
  },
  {
    id: "work",
    title: "Experience",
    home_link: "/#work",
  },
  {
    id: "tech",
    title: "Tech",
    home_link: "/#tech",
  },
  {
    id: "personalprojects",
    title: "Projects",
    home_link: "/#personalprojects",
  },
];

const services = [
  {
    title: "AWS Certified Cloud Practitioner",
    icon: awsccp,
    verify_link:
      "https://www.credly.com/badges/4162441b-eee2-4ae0-ad8f-6aba566304f5/public_url",
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
    icon: awssaa,
    verify_link:
      "https://www.credly.com/badges/2725248c-d1eb-44fc-b2ee-93e6e3114b17/public_url",
  },
  {
    title: "AWS Certified Developer - Associate",
    icon: awsdev,
    verify_link:
      "https://www.credly.com/badges/c686fc05-407e-43d2-87d0-1c1921eaec4b/public_url",
  },
  {
    title: "AWS Certified SysOps Administrator - Associate",
    icon: awssysops,
    verify_link:
      "https://www.credly.com/badges/7d65143d-5442-429b-8188-7b3fdd7afdaa/public_url",
  },
  {
    title: "CompTIA Security+",
    icon: securityplus,
    verify_link:
      "https://www.credly.com/badges/7234cbbe-9f7a-4fab-9cad-c83b23c50746/public_url",
  },
  {
    title: "Terraform Associate",
    icon: comingsoon,
    verify_link:
      "https://developer.hashicorp.com/certifications/infrastructure-automation",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    ball_label: "HTML",
  },
  {
    name: "CSS 3",
    icon: css,
    ball_label: "CSS",
  },
  {
    name: "JavaScript",
    icon: javascript,
    ball_label: "JavaScript",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    ball_label: "Tailwind CSS",
  },
  {
    name: "GitHub",
    icon: github,
    ball_label: "GitHub",
  },
  {
    name: "git",
    icon: git,
    ball_label: "Git",
  },
  {
    name: "Python",
    icon: pythonimage,
    ball_label: "Python",
  },
  {
    name: "AWS",
    icon: awslogo,
    ball_label: "AWS",
  },
  {
    name: "SQL",
    icon: sqllogo,
    ball_label: "SQL",
  },
  {
    name: "RDBMS",
    icon: rdbmslogo,
    ball_label: "RDBMS",
  },
  {
    name: "SharePoint",
    icon: sharepointlogo,
    ball_label: "SharePoint",
  },
  {
    name: "Power Platform",
    icon: powerplatformlogo,
    ball_label: "Power Platform",
  },
];
/*
  const awsservices = [
    {
      name: "EC2",
      icon: ec2,
    },
    {
      name: "S3",
      icon: s3,
    },
    {
      name: "Lambda",
      icon: lambda,
    },
    {
      name: "DynamoDB",
      icon: dynamodb,
    },
    {
      name: "API Gateway",
      icon: apigateway,
    },
    {
      name: "CloudFront",
      icon: cloudfront,
    },
    {
      name: "EC2",
      icon: ec2,
    },


  ];
  */

const experiences = [
  {
    title: "Accounts Payable Clerk",
    company_name: "University of Hawaii at Manoa",
    icon: uhmanoa,
    iconBg: "#E6DEDD",
    date: "May 2018 - December 2020",
    points: [
      "(Personal Project) Automated service billing processes using Python during remote work to decrease processing times by 50 minutes",
      "Processed and uploaded new service billing reports and invoices Microsoft Excel to an internal electronic record keeping system",
      "Filed, scanned, and printed various fiscal documents",
      "Maintained finalized records and reconciled reports for any discrepancies",
    ],
  },
  {
    title: "Po'okela Fellows IT Intern",
    company_name: "Honolulu Board of Water Supply",
    icon: bows,
    iconBg: "#E6DEDD",
    date: "January 2021 - May 2021",
    points: [
      "Developed and managed a new internal web application to optimize electronic record keeping using OutSystems",
      "Designed and developed database structures and tables using SQL with SQL Server",
      "Utilized Agile Methodology to gather, analyze, and implement end-user requirements",
      "Performed Quality Assurance testing/improvements to existing departmental enterprise systems",
      "Provided web application support/training to various level end-users in multiple organizational departments",
      "Participated in an internal network penetration test by mapping the communication between all enterprise applications, databases, and servers",
      "Analyzed Nessus network scan results and provided vulnerability analysis using NVD and Nmap",
      "Researched vulnerabilities and learned about mitigations for vulnerabilities discovered during testing",
    ],
  },
  {
    title: "IT Specialist MID - Desktop Support Technician",
    company_name: "Apex Systems",
    icon: apexsystems,
    iconBg: "#E6DEDD",
    date: "August 2021 - July 2022",
    points: [
      "Provided on-site desktop support to 1000+ users to troubleshoot Tier 2 computer hardware/software issues on Windows 10",
      "Troubleshot client-side network connectivity issues from the machine to layer 1 hardware",
      "Trained/mentored new technicians to organizational standards and developed SOPs for other technicians to follow",
      "Managed between 5-115 trouble tickets daily while resolving user issues in a timely manner",
      "Promoted to VIP technician to resolve high-priority incidents encompassing ~100 VIP users to meet higher SLA requirements",
    ],
  },
  {
    title: "System Administrator",
    company_name: "CEdge Inc.",
    icon: cedge,
    iconBg: "#E6DEDD",
    date: "July 2022 - Present",
    points: [
      "Managed and developed a multi-unit wide project that optimizes electronic form routing processes using Microsoft's Power Platform and SharePoint",
      "Provided on-site/remote computer system support to resolve hardware/software interface issues on Windows 10 and Windows 11",
      "Managed computer objects/groups in Microsoft Azure and Intune",
      "Identified security violations, patterns of non-compliance, & remediated machines to minimize network security risks using Microsoft Intune",
      "Developed SOPS and guidelines for machine/network issues and developing with Microsoft's Power Platform",
    ],
  },
];

const projectone = [
  {
    //Step 1
    overview:
      "The diagram above is the process and architecture of me deploying a basic WordPress website on a single EC2 instance for a CodeDeploy deployment.",
    steplineheading:
      "Creating an EC2 Instance Profile for an EC2 Instance with CodeDeploy",
    stepline_a: "Use IAM User Account",
    Explanation_a:
      "Prior to provisioning any resources, I made sure to login to my IAM User Account with admin rights that I created previously when I first made my AWS account (NEVER USE ROOT!). I also gave this account access to AWS CLI to manage resources.",
    stepline_b: "Create Service Role For CodeDeploy",
    Explanation_b:
      "Using the CLI, I created the service role for CodeDeploy. Since I was using EC2 in this lab, I attached the “AWSCodeDeployRole” IAM managed policy to a newly created service role called “CodeDeployServiceRole”. This service role will allow CodeDeploy to access the EC2 Instance to perform things such as reading its identification tags and managing its auto scaling groups/policies. Other deployment methods require attaching a different managed policy.",
    stepline_c: "Lockdown IAM Permissions",
    Explanation_c:
      "It was also recommended that we lock down the permissions to the IAM User Account with admin rights we are using. This was done by creating an inline policy and attaching it to the account I am signed into.",
    stepline_d: "Create EC2 Instance Profile",
    Explanation_d:
      "Since I was using an EC2 Instance in the lab, I created an EC2 Instance Profile for my instance to give the CodeDeploy agent access to my site assets stored in an S3 bucket. Then I attached another policy so Systems Manager (SSM) can install CodeDeploy after I create the instance.",
    image: project1image,
  },
  {
    //Step 2
    steplineheading: "Creating an EC2 Instance to host the site",
    stepline_a: "Create The EC2 Instance",
    Explanation_a:
      "In this lab, I decided to use the Amazon Linux 2 AMI as it is part of the free tier and comes with the SSM Agent pre-installed. During the creation of the instance, I attached the instance role I created earlier, created a key pair to allow the usage of the SSH utility to connect to the instance via SSH, and allowed inbound HTTP traffic.",
    stepline_b: "Install CodeDeploy Agent",
    Explanation_b:
      "I then installed the “AWSCodeDeployAgent” package with SSM.",
  },
  {
    //Step 3
    steplineheading: "Setting Up The Website",
    stepline_a: "Clone Repository",
    Explanation_a:
      "Since this is a lab focused on deployment rather than developing, I used an existing WordPress sample site provided by AWS. I have git installed on my machine so I just cloned the repository from GitHub.",
    stepline_b: "Create Folder For Files and Scripts",
    Explanation_b:
      "I then created a folder in the source code of the sample site so that CodeDeploy can provision service files such as Apache and MySQL for the site using scripts.",
    stepline_c: "Create AppSpec File",
    Explanation_c:
      "Once I installed the scripts and dependencies files,  I created an AppSpec file in the source code’s root directory so that CodeDeploy can move all the files and provision the services the site needs on the EC2 Instance.",
  },
  {
    //Step 4
    steplineheading: "Creating S3 Bucket To Store Website Assets",
    stepline_a: "Create S3 Bucket and Bucket Policy",
    Explanation_a:
      "After creating a globally-unique S3 Bucket, I created an S3 Bucket Policy to allow “PUTObjects” / uploading objects to the bucket from my account and to allow “GET” / “LIST” from my EC2 Instance I created earlier.",
    stepline_b: "Create Application Revision",
    Explanation_b:
      "Using CodeDeploy commands, I then created an application revision by registering my WordPress site and pushed the site assets into the S3 Bucket I created earlier.",
  },
  {
    //Step 5
    steplineheading: "Deploy Website With CodeDeploy",
    stepline_a: "Create Deployment Group For CodeDeploy",
    Explanation_a:
      "Using the CLI, I retrieved the Service Role ARN from the Service Role I created earlier to create a deployment group using CodeDeploy.",
    stepline_b: "Create Deployment In S3 Bucket",
    Explanation_b:
      "Once the deployment group was created, I then used CodeDeploy to create a deployment in the S3 Bucket and verified the deployment status with the succeeded message.",
    stepline_c: "Test The Site",
    Explanation_c:
      "Lastly, I verified that the site was working using the public address of the EC2 Instance and thankfully it was working!",
  },
];

const projecttwo = [
  {
    //Step 1
    overview:
      "Following a 3 tier architecture (Presentation tier, Logic tier, Data tier), we can make the WordPress site highly available and auto scale on demand. In the previous lab, I only deployed the site to one EC2 Instance in one Availability Zone. This may be okay for something like a simple application in a development environment, however, this is not fault tolerant nor highly available. If that single EC2 Instance fails or experiences a rare case of an entire Availability Zone going down, users cannot access the application. In this Lab, I take things a bit further to make sure disasters like that don’t happen. I will also use traditional AWS CLI to install WordPress rather than CodeDeploy.",
    steplineheading: "Create a VPC To Contain Our Resources",
    stepline_a: "Setup VPC",
    Explanation_a:
      "First, I created a VPC with 2 Availability Zones, 2 Public Subnets, and 4 Private Subnets. The 2 Public Subnets will be for the Web Tier, and the 4 Private Subnets will be for the App Tier and Data Tier of my app.",
    stepline_b: "Create Route Tables",
    Explanation_b:
      "I then specified 5 Route Tables. 1 Public Route Table, 2 Private Route Tables for the 1st Availability Zone and 2 Private Route Tables for the 2nd Availability Zone. For the sake of the lab, I specified in the Route Table to allow sending to anywhere through the Internet Gateway for the initial setup of WordPress EC2 instances located in the private subnet app tier. This will be changed to a NAT Gateway after it is created.",
    stepline_c: "Specify Internet Gateway",
    Explanation_c:
      "Lastly, I specified an Internet Gateway to allow the VPC to connect to the Internet.",
    image: project2image,
    imagesummary: project2image1,
  },
  {
    //Step 2
    steplineheading:
      "Create Security Groups For The EC2 Instances, EFS file system, Bastion Host, RDS Database, ElastiCache (Redis), and Application Load Balancer",
    stepline_a: "Define Security Groups",
    Explanation_a:
      "To allow EFS to connect to our EC2 Instances, I made sure the Security Groups for our EC2 Instances, EFS mount targets, and a Bastion Host were created. The Security Group for EC2 Instances hosting the WordPress app has HTTP, HTTPS, and SSH inbound rules where the SSH inbound should only allow the Bastion Host Security Group as the source.The Bastion Host will allow us to connect to our EC2 Instances in a private subnet from the Internet by having an allow SSH inbound rule. The Security Group for the EFS has an allow inbound for NFS from the WordPress App Security Group, which allows the EC2 Instance hosting the app to connect to EFS. The Security Group for our RDS Database will allow access to the database from the WordPress instance that is in the private subnet with an inbound rule allowing MySQL traffic from the WordPress app instance Security Group. The Security Group for ElastiCache will have an inbound rule to allow traffic through the default Redis port 6379 from the Security Group of the WordPress app. The Security Group for the ALB allows HTTP/HTTPS from anywhere.",
    imagesummary: project2image2,
  },
  {
    //Step 3
    steplineheading: "Create an EFS File System To Store Our Files",
    stepline_a: "Why EFS",
    Explanation_a:
      "The WordPress website will use EFS to store the files for the website. The benefits of using EFS is that the files stored in there will persist in the case an EC2 Instance fails and the Instances can share data across Availability Zones.",
    stepline_b: "Provision File System",
    Explanation_b:
      "In the EFS Console I created a file system in the VPC we just created. Each AZ will have 1 mount target for the file system using the subnet IDs of the private subnets in the data tier and the Security Group I previously created for EFS.",
    imagesummary: project2image3,
  },
  {
    //Step 4
    steplineheading: "Create EC2 Instances To Host Our Website",
    stepline_a: "Provision Initial EC2 Instance",
    Explanation_a:
      "I first created an initial EC2 Instance for the WordPress site. It’s recommended to use a compute optimized instance type for this use case, however, I stuck to t2.micro since it is free tier eligible. I made sure in the network settings to use the VPC I created earlier, place it in the private subnet in the app tier, attached the Security Group I created for the EC2 Instances previously, and connected the EFS file system I made earlier (this can also be done using CLI by creating the WordPress directory, mounting EFS to that directory using the command provided by the EFS console and allow automatic mounting by mounting the file system under /etc/fstab).",
    stepline_b: "Create Bastion Host",
    Explanation_b:
      "I created a Bastion Host Instance with an Amazon Linux AMI and used an existing key pair to allow SSH. Again, I made sure to adjust the networks settings to use the new VPC for this project, place it in the public subnet we created since this will be accessed from the internet, and attached the Bastion Host Security Group I created.",
    stepline_c: "",
    imagesummary: project2image4,
  },
  {
    //Step 5
    steplineheading: "Connecting To Our Private Instance Using Bastion Host",
    stepline_a: "SSH Through Bastion Host",
    Explanation_a:
      "To install WordPress on the private instance, I used SSH through the Bastion Host and ran the commands provided by the documentation on the WordPress website to install the dependencies, WordPress, and Apache for the web server.",
  },
  {
    //Step 6
    steplineheading: "Create a Database Using RDS and Read Replica",
    stepline_a: "Create Subnet Group",
    Explanation_a:
      "Before creating the DB, I created a subnet group (subnet collection) for the DBs that will be in 2 private data tier subnets in the 2 availability zones in the VPC I created.",
    stepline_b: "Create Master DB",
    Explanation_b:
      "Then in the RDS console, I created a free tier MySQL DB, setup the credentials for the db, placed it in the subnet group I recently created, attached the RDS Security Group, selected the AZ where the initial WordPress EC2 Instance was created, and assigned it the VPC I created. I also made sure backups were enabled on this DB to allow for the creation of a Read Replica.",
    stepline_c: "Create Read Replica",
    Explanation_c:
      "Once the Master DB was created, I created a Read Replica with the Master DB as the replica source with the default configuration settings and placed it in the same subnet group as the primary DB with the same Security Group as the primary DB. The Read Replica will be created based on a snapshot of the primary DB and will use asynchronous syncing to update the Read Replica for any changes in the primary DB. This Read Replica will allow you to scale your read loads on your DB and reduce the load on the primary DB. ",
    imagesummary: project2image6,
  },
  {
    //Step 7
    steplineheading:
      "Using Route 53 To Connect Requests To The EC2 Instance Hosting The WordPress Website",
    stepline_a: "Assigning a Domain",
    Explanation_a:
      "Since I have a domain registered (one that I use for my resume) I would assign a domain to the WordPress site by modifying the WordPress.conf file under /etc/apache2/sites-available/ and insert my domain name in there.",
    stepline_b: "Create Record in Route 53",
    Explanation_b:
      "I created a record in Route 53 and input a subdomain along with the public IPv4 address of the WordPress Instance into the record using the simple routing policy. Based on the pricing of Route 53 documentation, DNS queries are free if the subdomains with record type A (IPv4) correspond to an alias record and the alias target is an AWS resource. Later on in this lab, I set the alias target to be an ALB in Route 53.",
    imagesummary: project2image7,
  },
  {
    //Step 8
    steplineheading:
      "Testing The WordPress URL and Logging Into The DB From The Website",
    stepline_a: "Testing The Website",
    Explanation_a:
      "I could now test the site to see if it was accessible from the internet by pasting the URL into my web browser. I then entered the database connection information prompted from the site. I used the database endpoint provided by the RDS console for the Database Host of the site. When I visit the WordPress site URL, I can see that the content is being served from the EC2 Instance based on the path of the URL. Later, I will set up a CloudFront Distribution to serve the website and an S3 Bucket to store the site assets.",
  },
  {
    //Step 9
    steplineheading: "Setting Up ElastiCache",
    stepline_a: "Why ElastiCache",
    Explanation_a:
      "ElastiCache is important because it will reduce the load off of your database for read operations by creating an in memory database. In this case, I decided to use Redis because the data is persistent in case the server fails. The great thing about WordPress is that it offers plugins for both Redis or Memcached, so it will integrate well with either one depending on your use case.",
    stepline_b: "Create Redis Cluster",
    Explanation_b:
      "For the sake of the lab, I created a Redis cluster with a single node in a Demo t4g.micro configuration. In a real world application where you want to achieve maximum scalability and availability, I would enable cluster mode with r7g.xlarge.",
    stepline_c: "Create Subnet Group",
    Explanation_c:
      "I then created a new subnet group, placed it in the private subnet data tier in both Availability Zones in the VPC and applied the ElastiCache Security Group I created earlier. The AZ with the initial WordPress Instance will have the Primary Endpoint, and the other AZ will hold the Replica.",
    stepline_d: "Add Redis Primary Endpoint To WordPress",
    Explanation_d:
      "Next I SSH back into the WordPress Instance to add the Redis primary endpoint configuration under the WordPress config file. Once I hit “Enable Object Cache” on the WordPress site settings, I could see the Redis connection.",
    imagesummary: project2image9,
  },
  {
    //Step 10
    steplineheading: "Creating An S3 Bucket To Store Static Site Assets",
    stepline_a: "Create S3 Bucket",
    Explanation_a:
      "To start I created a globally unique S3 Bucket and left the default settings for the purpose of this lab.",
    imagesummary: project2image10,
  },
  {
    //Step 11
    steplineheading: "Creating a CloudFront Distribution",
    stepline_a: "Why CloudFront",
    Explanation_a:
      "Although you can serve content directly from your S3 Bucket, setting up CloudFront in front of your S3 Bucket will speed up response times when people visit your site and decrease load on your bucket since the content is served at an edge location. Additionally, enabling origin access control will improve security by only allowing requests from the CloudFront Distribution.",
    stepline_b: "Update S3 Bucket Policy",
    Explanation_b:
      "Once the Distribution is created, I took the S3 Bucket policy provided by CloudFront and updated the bucket policy of the bucket that will store the site assets. This policy will allow “GETObject” requests from CloudFront only.",
  },
  {
    //Step 12
    steplineheading: "Create IAM Role For The WordPress EC2 Instance",
    stepline_a: "Create IAM Role",
    Explanation_a:
      "Now that the S3 Bucket has been set up, I created an IAM Role for the EC2 Instance hosting the WordPress site to allow modifications to the S3 bucket using the S3FullAccess policy and attached it to the EC2 Instance.",
    stepline_b: "Install AWS CLI",
    Explanation_b:
      "I also installed AWS CLI on the WordPress Instance to copy the static files (such as images) stored on the WordPress Instance to the S3 bucket.",
    stepline_c: "Sync Website Uploads To S3 Bucket",
    Explanation_c:
      "Then I created a cron job on the EC2 Instance under the cron directory to sync uploads to the website to the S3 Bucket and modified the WordPress .htaccess file using a rewrite rule to include the CloudFront domain name for redirecting any site requests to the CloudFront Distribution. As a result, when someone visits the website, the website loads the content from the S3 Bucket instead of the EC2 Instance. In short, the cron job runs sync which pushes uploads to the S3 Bucket and the assets are served through CloudFront.",
  },
  {
    //Step 13
    steplineheading: "Preparing For Auto Scaling Testing",
    stepline_a: "Create File To Output IP Address",
    Explanation_a:
      "To test Auto Scaling in the future, I created a test file on the WordPress EC2 Instance that simply outputs the private IP of the EC2 Instance.",
  },
  {
    //Step 14
    steplineheading: "Create Master AMI",
    stepline_a: "Why Create An AMI Image",
    Explanation_a:
      "In the EC2 console, I created a master AMI image using the initial WordPress Instance to prepare for auto scaling. The AMI will be a template for how new EC2 Instances are created during an Auto Scale action. I want it to be the same as the initial WordPress Instance, thus creating an AMI Image from it is the most efficient way.",
  },
  {
    //Step 15
    steplineheading: "Finish Setting Up Route Tables",
    stepline_a: "Finish Route Tables",
    Explanation_a:
      "Now I will finish setting up all the Route Tables for the subnets since I only setup the Route Table for the private app tier subnet in the first part of the lab.",
    stepline_b: "Create NAT Gateway",
    Explanation_b:
      "In the VPC console, I created a NAT Gateway in the public subnet web tier to allow the WordPress Instance in the private subnet app tier to connect to the Internet. This Route Table will connect to the NAT Gateway instead of the IGW and I also added this route for the other private Route Tables to connect to the NAT Gateway. The public Route Table doesn’t need this since it already has the IGW to reach the internet.",
    imagesummary: project2image15,
  },
  {
    //Step 16
    steplineheading: "Create Auto Scaling Group and Application Load Balancer",
    stepline_a: "Adjust Security Groups",
    Explanation_a:
      "Now I removed the allow traffic from anywhere inbound rule in the WordPress Instance Security Group, only allowed HTTP/HTTPS inbound from the Security Group of the Application Load Balancer, and kept the SSH allow from the Bastion Host Instance only.",
    stepline_b: "Create Launch Template",
    Explanation_b:
      "Prior to creating an Auto Scaling Group, I created a launch template that used my AMI image I created earlier from the initial WordPress Instance on t2.micro type, applied the IAM Role I created earlier as the Instance Profile to allow EC2 Instances to connect to S3, and applied the WordPress Instance Security Group.",
    stepline_c: "Create Auto Scaling Group",
    Explanation_c:
      "Then I could now create an Auto Scaling Group based on the launch template I created. I selected to launch in both AZs in the private subnet app tier in the VPC.",
    stepline_d: "Create Application Load Balancer",
    Explanation_d:
      "I then specified to create a new Application Load Balancer that is internet facing in both of the public subnets in the 2 AZs and created a new target group for ALB’s listener since the ALB needs at least one listener to receive traffic. In a prod environment, I would also enable health checks so that the ALB can route traffic to healthy Instances, but for the sake of the lab I left it disabled.",
    stepline_e: "Setting Auto Scaling Group Size",
    Explanation_e:
      "In terms of the ASG group size, I specified a 2 minimum, 2 desired, and 4 maximum units capacity so that the ASG can scale based on the demand. Of course, the amount you specify will change depending on the needs of your application.",
    stepline_f: "Defining Scaling Policy",
    Explanation_f:
      "For the scaling policy, I used a target tracking scaling policy so that it will scale based on a target value of a CloudWatch metric. I just decided to use a target “Average CPU Utilization” value of 60% for the lab. If the metric goes above this number, the ASG will add another Instance. Now when I refresh my Instances in the EC2 console, new Instances will appear and it will be added to the target group I created earlier and the ALB will forward the traffic to that target group’s Instances.",
    stepline_g: "Set Alias In Route 53",
    Explanation_g:
      "Next I went back to Route 53 to edit the WordPress site record to use an alias to route traffic to the ALB.",
    stepline_h: "Add Alternate Domain Name to CloudFront",
    Explanation_h:
      "Finally, I went back to my CloudFront Distribution and added an alternate domain name so that it shows my domain name instead of the CloudFront URL. I also changed the Viewer Protocol Policy to Redirect HTTP to HTTPS for better security.",
    imagesummary: project2image16,
  },
  {
    //Step 17
    steplineheading: "Checking Auto Scaling",
    stepline_a: "Visit The Test File",
    Explanation_a:
      "To check if the auto scaling is working, I visited the path to the test file that outputs the private IP of the WordPress Instance I created earlier. Each time I refreshed the page, I could see that the IP address was changing because the Application Load Balancer was redirecting me to a different Instance each time.",
    imagesummary: project2image,
  },
  {
    //Step 18
    steplineheading: "The End!",
    stepline_a: "Summary",
    Explanation_a:
      "Overall, I enjoyed working on this project as I learned a lot about how core AWS services work together and followed a common architecture for deploying applications on AWS. The only thing that I did not do in this project was setup another NAT Gateway in the 2nd Availability Zone for cost reasons.",
  },
];

const projectthree = [
  {
    //Step 1
    overview:
      "This project in AWS is my website portfolio project which you are currently viewing. The above diagram displays a 3 tier serverless architecture recommended by AWS. Note that for this project, I will not be using Cognito or an API Gateway. My website has no authentication and I will be using Lambda Function URLs to replace the API Gateway for the simplicity of this project.",
    description: "",
    steplineheading: "Creating S3 Bucket and Uploading Website To S3",
    stepline_a: "Create S3 Bucket",
    explanation_a:
      "I first started by creating a globally unique bucket name to host my static assets for my website and I also ensured that all public access is blocked. Even though my website assets will be stored here, it will not be publicly available and CloudFront will serve these assets instead. I will also be adding custom tags for each resource provisioned in this project for spending purposes.",
    stepline_b: "Upload Files To S3 Bucket",
    explanation_b:
      "Next I uploaded my website assets into the S3 Bucket directly. Later I will setup a way to push code changes from Github to the S3 Bucket automatically.",
    stepline_c: "Set Default Page",
    explanation_c:
      "Finally I set the default page of the website to my index.html file of my website.",
    image: project3image,
  },
  {
    //Step 2
    steplineheading: "Creating a CloudFront Distribution To Serve My Website",
    stepline_a: "Set Origin Domain",
    explanation_a:
      "After I configured my S3 Bucket, I then created a CloudFront Distribution and set the origin domain to my S3 Bucket that I created earlier.",
    stepline_b: "Enable Origin Access Control",
    explanation_b:
      "Next I enabled Origin Access Control settings in CloudFront and modified my S3 Bucket policy to use the CloudFront policy statement that was provided after creating the Distribution. I also enabled HTTPS only for the viewer protocol policy.",
    image: project3image,
  },
  {
    //Step 3
    steplineheading: "Creating A Custom Domain and SSL Certificate",
    stepline_a: "Register Domain",
    explanation_a:
      "In the Route 53 console, I registered a domain, shaneshimizu.com and this will automatically create a hosted zone.",
    stepline_b: "Use Alternate Domain Name In CloudFront",
    explanation_b:
      "Going back to CloudFront, I modified the CloudFront Distribution to use the alternate domain name shaneshimizu.com",
    stepline_c: "Request Public Certificate",
    explanation_c:
      "Next I requested a public certificate in the ACM console using shaneshimizu.com and used that SSL certificate for my website.",
    stepline_d: "Create Record In Route 53",
    explanation_d:
      "Back in Route 53, I created a record of Record Type A and used an Alias to the CloudFront Distribution using a Simple Routing Policy.",
    stepline_e: "Test the URL",
    explanation_e:
      "Now when I visit the url shaneshimizu.com, it loads my website!",
    image: project3image,
  },
  {
    //Step 4
    steplineheading:
      "Creating a Lambda Function API To Communicate With a DynamoDB Table",
    stepline_a: "Create DynamoDB Table",
    explanation_a:
      "In the DynamoDB console, I created a new DynamoDB table and set the partition key (Primary Key) of the table to simply “id”.",
    stepline_b: "Create A New Column in DynamoDB Table",
    explanation_b:
      "For this project, I wanted to implement a website view counter that updates every time someone visits my website. In my new DynamoDB table, I manually created a new item with an id of 1 and a new attribute called “viewcount” of type number.",
    stepline_c: "Create Lambda Function",
    explanation_c:
      "Then I created a Lambda function to update this table. Under the advanced settings, I enabled function URLs which allows us to invoke the Lambda function with a public URL instead of having to set up an API Gateway. Since the function will be public, I do not want anybody to invoke my function, so I also enabled Cross-Origin Resource Sharing for the function which I will set to only allow my domain (shaneshimizu.com) to invoke the function. In a production environment with multiple Lambda functions/microservices, I would place an API Gateway in front of them for centralization and security. In this lab, I am using Lambda function URLs for costs and simplicity.",
    stepline_d: "Set Function URL Allow Origin",
    explanation_d:
      "Next I modified the Lambda function to retrieve and update the “viewcount” attribute every time someone visits my website. I also modified the Function URL Allow Origin to be the URL of my website.",
    stepline_e: "Adjust Lambda Function Execution Role",
    explanation_e:
      "For the permissions of my Lambda function, I modified its execution role to include the AmazonDynamoDBFullAccess policy so it can read and update my DynamoDB table.",
    image: project3image,
  },
  {
    //Step 5
    steplineheading: "Implementing The View Counter Into The Website Files",
    stepline_a: "Create a JavaScript Function",
    explanation_a:
      "To implement my Lambda Function URL into my website, I created a javascript function in my website files that will fetch my function URL, invoke the Lambda function, and update the view counter on my website page with the response from the Lambda function.",
    image: project3image,
  },
  {
    //Step 6
    steplineheading:
      "Configuring CI/CD With GitHub Actions and Creating a GitHub Repository",
    stepline_a: "Setting Up CI/CD and GitHub Repository",
    explanation_a:
      "To easily and reliably make changes to my website in the future, I utilized GitHub for source control and GitHub Actions for CI/CD. I created a GitHub repository and pushed my code to the new repo. Then I created a .yml file for Github Actions in my source code which will sync changes to my repo to my S3 Bucket.",
    image: project3image,
  },
  {
    //Step 7
    steplineheading:
      "Using Infrastructure as Code To Manage AWS Resources With Terraform",
    stepline_a: "Why Terraform",
    explanation_a:
      "To take this project a step further, I used Terraform to deploy the same resources. Utilizing Infrastructure as Code will greatly help with automating the processes of provisioning and deprovisioning resources in AWS.",
    stepline_b: "Deploy With Terraform",
    explanation_b:
      "I used terraform plan and apply commands to provision my Lambda function as well as create an IAM Role for the Lambda function to access my DynamoDB table.",
    image: project3image,
  },
];

const projectfour = [
  {
    overview:
      "An AWS sample project that I plan to model from and build in the future to gain more hands-on experience with deploying. My goal is to not only deploy models, but learn how to monitor machine learning services in an AWS environment.",
    stepline_a: "The Plan",
    explanation_a: "explanation here",
    image: project4image,
  },
];

const projectfive = [
  {
    overview:
      "Above is a diagram of what I plan to do in this project. What makes this project advanced is the incorporation of new processes and tools to build a CI/CD pipeline. I am familiar with designing and building architectures in AWS, but I am still new to CI/CD methodologies and tools to build/monitor these architectures. Jenkins will be for the CI/CD pipeline, Maven to build the project, Docker to create images, Kubernetes for container management, and Terraform to build infrastructure with code. Once I become more familiar with these tools and CI/CD best practices, I plan to build out this project.",
    stepline_a: "The Plan",
    explanation_a: "explanation here",
    image: project5image,
  },
];

const projectsix = [
  {
    overview:
      "This was a personal project I completed during my time as an Accounts Payable Clerk. After learning Python for a couple weeks, I realized that I could automate my work duties to complete my tasks more efficiently. Normally, I would have to manually enter data into an Excel sheet from a PDF and upload that sheet to an internal processing system. With this project, I used Python along with Tabula and Openpyxl to automatically read data from the PDF, perform conversions/calculations, and automatically generate an accurate Excel sheet for me to upload. This decreased my total processing time from 1 hour to approximately 10 minutes. I was extremely happy that I could apply the skills that I learned to a real world scenario.",
    stepline_a: "Code for this project can be found on my GitHub page.",
    explanation_a:
      "As you can see in the video below, when I run the script I created, it opens the file I tell it to open and automatically pulls data from the pdf, performs calculations/conversions, and inputs it into an Excel sheet. Parts of the video are censored for privacy.",
    image: pyautoimage,
    video: pyautovideo,
  },
];

const projects = [
  {
    name: "Deploying a Simple WordPress Website in AWS",
    description:
      "One of my first AWS Projects that starts of with deploying a basic Wordpress website on EC2 and then architecting the website to auto-scale and be highly available",
    tags: [
      {
        name: "EC2",
        color: "blue-text-gradient",
      },
      {
        name: "CodeDeploy",
        color: "blue-text-gradient",
      },
      {
        name: "S3",
        color: "blue-text-gradient",
      },
    ],
    image: project1image,
    source_code_link: "https://github.com/shanekshimizu?tab=repositories",
    project_page_link: "/project1",
  },
  {
    name: "Deploying a Highly Available WordPress Website In AWS",
    description:
      "My second AWS project that takes my first WordPress project in AWS a step further by making the website high available following a 3-tier architecture.",
    tags: [
      {
        name: "EC2",
        color: "blue-text-gradient",
      },
      {
        name: "Route 53",
        color: "blue-text-gradient",
      },
      {
        name: "CloudFront",
        color: "blue-text-gradient",
      },
      {
        name: "VPC",
        color: "blue-text-gradient",
      },
      {
        name: "EFS",
        color: "blue-text-gradient",
      },
      {
        name: "ASG",
        color: "blue-text-gradient",
      },
      {
        name: "ELB",
        color: "blue-text-gradient",
      },
    ],
    image: project2image,
    source_code_link: "https://github.com/shanekshimizu?tab=repositories",
    project_page_link: "/project2",
  },
  {
    name: "Deploying a Serverless Website",
    description:
      "After building a serverful application like the WordPress project, I built a serverless web application which is my website portfolio!",
    tags: [
      {
        name: "CloudFront",
        color: "blue-text-gradient",
      },
      {
        name: "S3",
        color: "blue-text-gradient",
      },
      {
        name: "Route 53",
        color: "blue-text-gradient",
      },
      {
        name: "Lambda",
        color: "blue-text-gradient",
      },
      {
        name: "DynamoDB",
        color: "blue-text-gradient",
      },
    ],
    image: project3image,
    source_code_link: "https://github.com/shanekshimizu?tab=repositories",
    project_page_link: "/project3",
  },
  {
    name: "(In Progress) Using SageMaker To Train a Machine Learning Model",
    description: "Training a machine learning model using SageMaker",
    tags: [
      {
        name: "SageMaker",
        color: "blue-text-gradient",
      },
    ],
    image: project4image,
    source_code_link: "https://github.com/shanekshimizu?tab=repositories",
    project_page_link: "/project4",
  },
  {
    name: " (In Progress) Implementing CI/CD In AWS",
    description:
      "Utilizing CI/CD tools and services to make changes to a web application",
    tags: [
      {
        name: "CICD",
        color: "blue-text-gradient",
      },
    ],
    image: project5image,
    source_code_link: "https://github.com/shanekshimizu?tab=repositories",
    project_page_link: "/project5",
  },
  {
    name: "Automating Processes With Python",
    description:
      "A personal project that I developed while working as an Accounts Payable Clerk. I used Python with Tabula and Openpyxl to decrease processing time by approximately 50 minutes",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: pyautoimage,
    source_code_link: "https://github.com/shanekshimizu?tab=repositories",
    project_page_link: "/project6",
  },
];

export {
  services,
  technologies,
  experiences,
  projectone,
  projects,
  projecttwo,
  projectthree,
  projectfour,
  projectfive,
  projectsix,
};
